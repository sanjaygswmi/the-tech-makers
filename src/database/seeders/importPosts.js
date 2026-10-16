const dbConnect = require('../../lib/dbConnect');
const Category = require('../../models/Category');
const Tag = require('../../models/Tag');
const Blog = require('../../models/Blog');

const posts = require('../seed/posts');

const buildMissingMap = (items, slugs) => {
    const map = new Map(items.map((item) => [item.slug, item._id]));
    const missing = slugs?.filter((slug) => !map.has(slug));
    return { map, missing };
};

const normalizePost = (post, categoryBySlug, tagBySlug) => {
    const normalized = { ...post };
    normalized.category = (post.category || [])
        .map((slug) => categoryBySlug.get(slug))?.filter(Boolean);
    normalized.tag = (post.tag || [])
        .map((slug) => tagBySlug.get(slug))?.filter(Boolean);

    if (post.createdAt) normalized.createdAt = new Date(post.createdAt);
    if (post.updatedAt) normalized.updatedAt = new Date(post.updatedAt);

    return normalized;
};

(async () => {
    await dbConnect();

    try {
        const categorySlugs = [...new Set(posts.flatMap((post) => post.category || []))];
        const tagSlugs = [...new Set(posts.flatMap((post) => post.tag || []))];

        const [categories, tags] = await Promise.all([
            categorySlugs.length ? Category.find({ slug: { $in: categorySlugs } }).lean() : [],
            tagSlugs.length ? Tag.find({ slug: { $in: tagSlugs } }).lean() : []
        ]);

        const { map: categoryBySlug, missing: missingCategories } = buildMissingMap(categories, categorySlugs);
        const { map: tagBySlug, missing: missingTags } = buildMissingMap(tags, tagSlugs);

        if (missingCategories.length) {
            console.warn('Missing categories for slugs:', missingCategories);
        }
        if (missingTags.length) {
            console.warn('Missing tags for slugs:', missingTags);
        }

        const normalizedPosts = posts.map((post) => normalizePost(post, categoryBySlug, tagBySlug));
        const postSlugs = normalizedPosts.map((post) => post.slug);
        const existingPosts = await Blog.find({ slug: { $in: postSlugs } }).select('slug').lean();
        const existingSlugs = new Set(existingPosts.map((post) => post.slug));

        const newPosts = normalizedPosts?.filter((post) => !existingSlugs.has(post.slug));

        if (newPosts.length === 0) {
            console.log('No new posts to import; all slugs already exist.');
        } else {
            const inserted = await Blog.insertMany(newPosts);
            console.log('Imported posts:', inserted.map((post) => post.slug));
        }
    } catch (error) {
        console.error('Error importing posts:', error);
    } finally {
        process.exit(0);
    }
})();

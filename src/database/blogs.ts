import dbConnect from "@/src/lib/dbConnect";
import Blog from "@/src/models/Blog";
import Tag from "@/src/models/Tag";

/**
 * Fetch a paginated list of blogs from the database, including linked category and tag data.
 * @param {number} page - The page number to fetch.
 * @param {number} limit - The number of blogs per page.
 * @returns {Promise<{ blogs: any[], totalBlogs: number, currentPage: number }>} - The paginated blogs data.
 */
export const getBlogs = async (page: number, limit: number) => {
    await dbConnect();

    const skip = (page - 1) * limit;
    const blogs = await Blog.find({ status: "active" })
        .sort({ createdAt: -1 })
        .skip(skip)
        .limit(limit)
        .populate("category", "_id title slug") // Include category data
        .populate("tag", "_id title slug") // Include tag data
        .lean();

    const totalBlogs = await Blog.countDocuments({ status: "active" });

    return {
        blogs,
        totalBlogs,
        currentPage: page,
    };
};

/**
 * Fetch a specific blog by its slug from the database, including linked category and tag data.
 * @param {string} slug - The slug of the blog to fetch.
 * @returns {Promise<any>} - The blog data.
 */
export const getBlog = async (slug: string) => {
    await dbConnect();

    const blog = await Blog.findOne({ slug, status: "active" })
        .populate("category", "_id title slug") // Include category data
        .populate("tag", "_id title slug") // Include tag data
        .lean();

    if (!blog) {
        throw new Error("Blog not found");
    }

    return blog;
};

/**
 * Fetch blogs that match a tag slug.
 * If no tag is found, returns an empty result set.
 */
export const getBlogsByTagSlug = async (
    tagSlug: string,
    page: number,
    limit: number
) => {
    await dbConnect();

    const tag = (await Tag.findOne({ slug: tagSlug }).lean()) as { _id?: unknown } | null;
    if (!tag?._id) {
        return {
            blogs: [],
            totalBlogs: 0,
            currentPage: page,
        };
    }

    const skip = (page - 1) * limit;
    const blogs = await Blog.find({ tag: tag._id, status: "active" })
        .sort({ createdAt: -1 })
        .skip(skip)
        .limit(limit)
        .populate("category", "_id title slug")
        .populate("tag", "_id title slug")
        .lean();

    const totalBlogs = await Blog.countDocuments({ tag: tag._id, status: "active" });

    return {
        blogs,
        totalBlogs,
        currentPage: page,
    };
};


/**
 * Return public blog slugs for the XML sitemap.
 * Only active posts are eligible for public indexing.
 */
export const getPublishedBlogSlugs = async (): Promise<
    { slug: string; updatedAt?: Date | string }[]
> => {
    await dbConnect();

    const blogs = await Blog.find({ status: "active" })
        .select("slug updatedAt")
        .sort({ updatedAt: -1 })
        .lean() as Array<{ slug?: unknown; updatedAt?: Date | string }>;

    return blogs
        .filter((blog) => typeof blog.slug === "string" && blog.slug.length > 0)
        .map((blog) => ({
            slug: blog.slug as string,
            updatedAt: blog.updatedAt,
        }));
};


/**
 * Fetch active blog posts explicitly associated with a canonical service slug.
 * Unlike legacy tag-based sections, this query intentionally has no generic fallback.
 */
export const getBlogsByServiceSlug = async (
    serviceSlug: string,
    page: number,
    limit: number
) => {
    await dbConnect();

    const normalizedSlug = serviceSlug.trim().toLowerCase();
    if (!normalizedSlug) {
        return { blogs: [], totalBlogs: 0, currentPage: page };
    }

    // Preserve existing service-tagged articles while editors progressively add explicit associations.
    const legacyTag = (await Tag.findOne({ slug: normalizedSlug }).select("_id").lean()) as { _id?: unknown } | null;
    const serviceFilters: Record<string, unknown>[] = [{ serviceSlugs: normalizedSlug }];
    if (legacyTag?._id) serviceFilters.push({ tag: legacyTag._id });
    const filter = { status: "active", $or: serviceFilters };
    const skip = (page - 1) * limit;
    const blogs = await Blog.find(filter)
        .sort({ updatedAt: -1, createdAt: -1 })
        .skip(skip)
        .limit(limit)
        .populate("category", "_id title slug")
        .populate("tag", "_id title slug")
        .lean();

    const totalBlogs = await Blog.countDocuments(filter);
    return { blogs, totalBlogs, currentPage: page };
};

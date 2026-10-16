const mongoose = require('mongoose');
const dbConnect = require('../../lib/dbConnect');
const Tags = require('../../models/Tag');

(async () => {
    await dbConnect();

    const rawTags = require('../seed/tags');
    const tags = rawTags.map((tag) => {
        const normalizedTag = { ...tag };
        if (normalizedTag._id && normalizedTag._id.$oid) {
            normalizedTag._id = new mongoose.Types.ObjectId(normalizedTag._id.$oid);
        }
        return normalizedTag;
    });
    console.log('Importing Tags:', tags);

    try {
        const slugs = tags.map((tag) => tag.slug);
        const existingTags = await Tags.find({ slug: { $in: slugs } }).select('slug').lean();
        const existingSlugs = existingTags.map((tag) => tag.slug);
        const newTags = tags?.filter((tag) => !existingSlugs.includes(tag.slug));

        if (newTags.length === 0) {
            console.log('No new tags to import; all slugs already exist.');
        } else {
            await Tags.insertMany(newTags);
            console.log('Tags imported successfully:', newTags.map((t) => t.slug));
        }
    } catch (error) {
        console.error('Error importing tags:', error);
    } finally {
        process.exit(0);
    }
})();

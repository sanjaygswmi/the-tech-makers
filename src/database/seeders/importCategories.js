const dbConnect = require('../../lib/dbConnect');
const Category = require('../../models/Category');

(async () => {
    await dbConnect();

    const categories = require('../seed/categories');
    console.log('Importing Categories:', categories);

    try {
        const slugs = categories.map((category) => category.slug);
        const existingCategories = await Category.find({ slug: { $in: slugs } }).select('slug').lean();
        const existingSlugs = existingCategories.map((category) => category.slug);
        const newCategories = categories?.filter((category) => !existingSlugs.includes(category.slug));

        if (newCategories.length === 0) {
            console.log('No new categories to import; all slugs already exist.');
        } else {
            await Category.insertMany(newCategories);
            console.log('Categories imported successfully:', newCategories.map((c) => c.slug));
        }
    } catch (error) {
        console.error('Error importing categories:', error);
    } finally {
        process.exit(0);
    }
})();

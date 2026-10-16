const dbConnect = require("../src/lib/dbConnect");
const Blog = require("../src/models/Blog");

const migrate = async () => {
    await dbConnect();

    const result = await Blog.collection.updateMany(
        { description: { $exists: true }, short_desc: { $exists: false } },
        [
            { $set: { short_desc: "$description" } },
            { $unset: "description" },
        ]
    );

    const modified = result.modifiedCount ?? result.nModified ?? 0;
    console.log(`Migrated ${modified} blog documents to short_desc.`);
};

migrate()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error("Migration failed:", error);
        process.exit(1);
    });

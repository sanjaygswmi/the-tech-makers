const mongoose = require('mongoose');

const TagSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
            trim: true,
            unique: true
        },
        slug: {
            type: String,
            required: true,
            trim: true,
            unique: true,
            lowercase: true // Added to enforce lowercase URLs
        },
        description: {
            type: String,
            trim: true
        },
        metaTitle: {
            type: String,
            trim: true
        },
        metaDescription: {
            type: String,
            trim: true
        },
        metaKeyword: {
            type: [String] // Changed to Array to match BlogSchema
        },
        headerScripts: {
            type: String,
            trim: true
        },
        bodyScripts: {
            type: String,
            trim: true
        }
    },
    { timestamps: true }
);

// export default mongoose.models.Tag || mongoose.model("Tag", TagSchema);
module.exports = mongoose.models?.Tag || mongoose.model('Tag', TagSchema);

const mongoose = require('mongoose');

const BlogSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true
        },
        slug: {
            type: String,
            required: true,
            unique: true,
            lowercase: true
        },
        image: {
            type: String,
            required: true
        },
        short_desc: {
            type: String,
            required: true // Short excerpt/summary
        },
        content: {
            type: String, 
            required: true // Add this for the full HTML/Gutenberg body
        },
        author: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User', // Links to your User model
            required: false // Optional for migration, can be required later
        },
        category: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Category' }],
        tag: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Tag' }],
        // Canonical service slugs used to curate relevant articles on service pages.
        serviceSlugs: { type: [String], default: [], index: true },
        
        // Made these optional to prevent migration crashes on missing old data
        metaTitle: {
            type: String,
            required: false 
        },
        metaDescription: {
            type: String,
            required: false
        },
        metaKeyword: {
            type: [String],
            required: false
        },
        headerScripts: {
            type: String,
            default: ''
        },
        bodyScripts: {
            type: String,
            default: ''
        },
        status: {
            type: String,
            enum: ['active', 'inactive'],
            default: 'active'
        }
    },
    { timestamps: true } 
);

BlogSchema.index({ createdAt: -1 }); 

const Blog = mongoose.models?.Blog || mongoose.model("Blog", BlogSchema);

module.exports = Blog;

const mongoose = require('mongoose');

const CategorySchema = new mongoose.Schema({
    title: { type: String, required: true, trim: true },
    slug: { 
        type: String, 
        required: true, 
        unique: true, 
        lowercase: true, // Added to enforce lowercase URLs
        trim: true 
    },
    description: { type: String },
    metaTitle: { type: String },
    metaDescription: { type: String },
    metaKeyword: { type: [String] }, // Changed to Array to match BlogSchema
    image: { type: String },
    headerScripts: { type: String },
    bodyScripts: { type: String },
    status: { 
        type: String, 
        enum: ['active', 'inactive'], // Added consistency
        default: 'active' 
    }
}, { timestamps: true });

module.exports = mongoose.models?.Category || mongoose.model('Category', CategorySchema);

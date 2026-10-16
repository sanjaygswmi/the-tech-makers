const mongoose = require('mongoose');
const path = require('path');
const Category = require('../models/Category'); // Register Category model
const Blog = require('../models/Blog'); // Register Blog model
const Tag = require('../models/Tag'); // Register Tag model
const User = require('../models/User'); // Register User model

require('dotenv').config({ path: path.resolve(process.cwd(), '.env.local') });
require('dotenv').config({ path: path.resolve(process.cwd(), '.env') });

let cached = global._mongooseCache || { conn: null, promise: null };
global._mongooseCache = cached;

async function dbConnect() {
    const MONGODB_URI = process.env.MONGODB_URI;
    if (!MONGODB_URI) {
        throw new Error('Please define the MONGODB_URI environment variable in .env');
    }

    if (cached.conn) {
        return cached.conn;
    }

    if (!cached.promise) {
        cached.promise = mongoose.connect(MONGODB_URI).then((mongoose) => {
            console.log('MongoDB connected');
            return mongoose;
        }).catch((error) => {
            console.error('MongoDB connection error:', error);
            throw error;
        });
    }

    cached.conn = await cached.promise;
    return cached.conn;
}

module.exports = dbConnect;

import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();

const connectToDatabase = async () => {
    try {
        const mongoURI = process.env.MONGODB_URI;
        if (!mongoURI) {
            console.error('MONGODB_URI environment variable is not set.');
            throw new Error('MONGODB_URI environment variable is not set.');
        }

        await mongoose.connect(mongoURI);
        console.log('Connected to MongoDB at 27017.');
    } catch (err) {
        console.error('Failed to connect to MongoDB.', err);
    }
};

export default connectToDatabase;
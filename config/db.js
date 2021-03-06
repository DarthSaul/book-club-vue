import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();
const db = process.env.mongoURI;

const connectDB = async () => {
    try {
        await mongoose.connect(db);
        console.log('CONNECTED TO MONGO...');
    } catch (err) {
        console.error(err);
        process.exit(1);
    }
};

export default connectDB;

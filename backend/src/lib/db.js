import mongoose from "mongoose";
import dotenv from "dotenv";

// ✅ Load the .env file explicitly from src folder
dotenv.config({ path: './src/.env' });

export const connectDB = async () => {
  try {
    // if (!process.env.MONGODB_URI) {
    //   throw new Error("❌ MONGODB_URI is not defined in the .env file");
    // }

    //await mongoose.connect(process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/polesDB');

    

    const conn = await await mongoose.connect("ujjvalagarwalcse26:WCQqhLnI4C2ppYv2@cluster0.ynk9coz.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0");
    console.log(`✅ MongoDB connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(`❌ MongoDB connection error: ${error.message}`);
    process.exit(1);
  }
};

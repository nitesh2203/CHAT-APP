import mongoose from "mongoose";
import dotenv from "dotenv";

// ✅ Load the .env file explicitly from src folder
dotenv.config({ path: './src/.env' });

export const connectDB = async () => {
  try {
    if (!process.env.MONGODB_URI) {
      throw new Error("❌ MONGODB_URI is not defined in the .env file");
    }

    const conn = await mongoose.connect(process.env.MONGODB_URI);

    console.log(`✅ MongoDB connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(`❌ MongoDB connection error: ${error.message}`);
    process.exit(1);
  }
};

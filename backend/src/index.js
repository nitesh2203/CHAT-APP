import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";
import path from "path";
import { connectDB } from "./lib/db.js";
import authRoutes from "./routes/auth.route.js";
import messageRoutes from "./routes/message.route.js";
import { app, server } from "./lib/socket.js";

// ✅ Load .env file explicitly
dotenv.config({ path: "./src/.env" });

const PORT = process.env.PORT || 5000;
const __dirname = path.resolve();

app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);

// ✅ Base route to prevent "Cannot GET /" error
app.get("/", (req, res) => {
  res.send("✅ Chat App Backend is Running!");
});

// ✅ API Routes
app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);

// ✅ Serving Frontend in Production Mode
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../frontend/dist")));
  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "../frontend", "dist", "index.html"));
  });
}

// ✅ Start Server
server.listen(PORT, () => {
  console.log(`🚀 Server is running on PORT: ${PORT}`);
  connectDB();
});




// import express from "express";
// import dotenv from "dotenv";
// import cookieParser from "cookie-parser";
// import cors from "cors";
// import path from "path";
// import { connectDB } from "./lib/db.js";
// import authRoutes from "./routes/auth.route.js";
// import messageRoutes from "./routes/message.route.js";
// import { app, server } from "./lib/socket.js";

// dotenv.config({ path: "./src/.env" });

// const PORT = process.env.PORT || 5000;
// const __dirname = path.resolve();

// // ✅ CORS config for dev and deployed frontend
// const allowedOrigins = [
//   "http://localhost:5173",
//   "https://chat-app-1-mfzw.onrender.com/login", // ✅ Replace with your actual frontend URL
// ];

// app.use(express.json());
// app.use(cookieParser());
// app.use(
//   cors({
//     origin: allowedOrigins,
//     credentials: true,
//   })
// );

// // ✅ Base route
// app.get("/", (req, res) => {
//   res.send("✅ Chat App Backend is Running!");
// });

// // ✅ API Routes
// app.use("/api/auth", authRoutes);
// app.use("/api/messages", messageRoutes);

// // ✅ Start Server
// server.listen(PORT, () => {
//   console.log(`🚀 Server is running on PORT: ${PORT}`);
//   connectDB();
// });


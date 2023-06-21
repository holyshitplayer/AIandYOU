import express from "express";
import * as dotenv from "dotenv";
import cors from "cors";

import connectDB from "./mongodb/connect.js";

import chatRoutes from "./routes/chatRoutes.js";
import imagesRoutes from "./routes/imagesRoutes.js";
import postRoutes from "./routes/postRoutes.js";
import aiChatStatsRoutes from "./routes/aiChatStatsRoutes.js";
import aiImagesStatsRoutes from "./routes/aiImagesStatsRoutes.js";
import downloadRoutes from "./routes/downloadRoutes.js";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json({ limit: "50mb" }));

app.use("/api/v1/chat", chatRoutes);
app.use("/api/v1/images", imagesRoutes);
app.use("/api/v1/post", postRoutes);
app.use("/api/v1/ai-chat-stats", aiChatStatsRoutes);
app.use("/api/v1/ai-images-stats", aiImagesStatsRoutes);
app.use("/api/v1/download", downloadRoutes);

const startServer = async () => {
    try {
        connectDB(process.env.MONGODB_URL);
        app.listen(process.env.API_SERVER_PORT, () => console.log(`API Server has started on port ${process.env.API_SERVER_PORT}`));
    } catch (error) {
        console.log(error);
    }
}

startServer();
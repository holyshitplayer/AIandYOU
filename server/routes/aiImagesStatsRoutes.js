import express from "express";
import * as dotenv from "dotenv";

import AIImagesStats from "../mongodb/models/aiImagesStats.js";

dotenv.config();

const router = express.Router();

router.route("/").get(async (req, res) => {
    try {
        const stats = await AIImagesStats.find({});

        res.status(200).json({ success: true, data: stats });
    } catch (error) {
        res.status(500).json({ success: false, message: error });
    }
});

router.route("/").post(async (req, res) => {
    try {
        const { requestsCount, imagesGeneratedCount, communityPostsCount, imageDownloadsCount } = req.body;

        const newStats = await AIImagesStats.create({
            requestsCount,
            imagesGeneratedCount,
            communityPostsCount,
            imageDownloadsCount
        });

        res.status(201).json({ success: true, data: newStats });
    } catch (error) {
        res.status(500).json({ success: false, message: error });
    }
});

router.route("/").put(async (req, res) => {
    const { requestsCount, imagesGeneratedCount, communityPostsCount, imageDownloadsCount } = req.body;

    try {
        const newStats = await AIImagesStats.findOneAndUpdate(
            {},
            {
                $inc: {
                    requestsCount,
                    imagesGeneratedCount,
                    communityPostsCount,
                    imageDownloadsCount
                }
            },
            { new: true }
        );

        res.status(200).json({ success: true, data: newStats });
    } catch (error) {
        res.status(500).json({ success: false, message: error });
    }
});

export default router;
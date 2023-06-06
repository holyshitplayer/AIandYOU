import express from "express";
import * as dotenv from "dotenv";

import AIChatStats from "../mongodb/models/aiChatStats.js";

dotenv.config();

const router = express.Router();

router.route("/").get(async (req, res) => {
    try {
        const stats = await AIChatStats.find({});

        res.status(200).json({ success: true, data: stats });
    } catch (error) {
        res.status(500).json({ success: false, message: error });
    }
});

router.route("/").post(async (req, res) => {
    try {
        const { messagesCount, requestCharactersCount, responseCharactersCount, dialogDownloadsCount } = req.body;

        const newStats = await AIChatStats.create({
            messagesCount,
            requestCharactersCount,
            responseCharactersCount,
            dialogDownloadsCount
        });

        res.status(201).json({ success: true, data: newStats });
    } catch (error) {
        res.status(500).json({ success: false, message: error });
    }
});

router.route("/").put(async (req, res) => {
    const { messagesCount, requestCharactersCount, responseCharactersCount, dialogDownloadsCount } = req.body;

    try {
        const newStats = await AIChatStats.findOneAndUpdate(
            {},
            {
                $inc: {
                    messagesCount,
                    requestCharactersCount,
                    responseCharactersCount,
                    dialogDownloadsCount
                }
            },
            {new: true}
        );

        res.status(200).json({ success: true, data: newStats });
    } catch (error) {
        res.status(500).json({ success: false, message: error });
    }
});

export default router;
import express from "express";
import * as dotenv from "dotenv";
import { Configuration, OpenAIApi } from "openai";

dotenv.config();

const router = express.Router();

const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY
});

const openai = new OpenAIApi(configuration);

router.route("/").post(async (req, res) => {
    try {
        const { prompt } = req.body;

        const aiResponse = await openai.createImage({
            prompt: prompt,
            n: 4,
            size: "512x512",
            response_format: "url"
        });

        const images = aiResponse.data.data.map((image) => image.url);

        res.status(200).json({ images: images });
    } catch (error) {
        res.status(500).send(error?.response.data.error.message);
    }
});

export default router;
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

        const aiResponse = await openai.createChatCompletion({
            model: "gpt-3.5-turbo",
            messages: [
                { "role": "user", "content": prompt }
            ],
            max_tokens: 1024,
            temperature: 0.5
        });

        const message = aiResponse.data.choices[0].message.content;
        res.status(200).json({ message: message });
    } catch (error) {
        res.status(500).send(error?.response.data.error.message);
    }
});

export default router;
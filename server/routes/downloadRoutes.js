import express, { json } from "express";

const router = express.Router();

router.route("/json").post(async (req, res) => {
    try {
        const { object, fileName } = req.body;
        res.setHeader("Content-Disposition", `attachment; filename=${fileName}.json`);
        res.setHeader("Content-Type", "application/json");

        res.status(200).json({ data: JSON.stringify(object) });
    } catch (error) {
        console.log(error);
        res.status(500).json({ success: false, message: error });
    }
});

export default router;
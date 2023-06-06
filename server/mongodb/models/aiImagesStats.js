import mongoose from "mongoose";

const AIImagesStats = new mongoose.Schema({
    requestsCount: { type: Number, required: true },
    imagesGeneratedCount: { type: Number, required: true },
    communityPostsCount: { type: Number, required: true },
    imageDownloadsCount: { type: Number, required: true }
});

const AIImagesStatsSchema = mongoose.model("AIImagesStats", AIImagesStats);

export default AIImagesStatsSchema;
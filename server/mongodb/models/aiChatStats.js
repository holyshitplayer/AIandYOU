import mongoose from "mongoose";

const AIChatStats = new mongoose.Schema({
    messagesCount: { type: Number, required: true },
    requestCharactersCount: { type: Number, required: true },
    responseCharactersCount: { type: Number, required: true },
    dialogDownloadsCount: { type: Number, required: true }
});

const AIChatStatsSchema = mongoose.model("AIChatStats", AIChatStats);

export default AIChatStatsSchema;
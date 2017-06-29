var mongoose = require("mongoose");

var transcriptionItemSchema = new mongoose.Schema({
    title: String,
    videoUrl: String,
    description: String,
    pdfUrl: String
});

var transcriptionSchema = new mongoose.Schema({
    description: String,
    transcriptions: [transcriptionItemSchema]
});

var Transcription = mongoose.model("Transcription", transcriptionSchema);

module.exports = Transcription;
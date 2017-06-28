var mongoose = require("mongoose");

var transcriptionSchema = new mongoose.Schema({
    description: String,
    transcriptions: [{
        title: String,
        videoUrl: String,
        description: String,
        pdfUrl: String
    }]
});

var Transcription = mongoose.model("Transcription", transcriptionSchema);

module.exports = Transcription;
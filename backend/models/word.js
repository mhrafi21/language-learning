const mongoose = require('mongoose');

const WordSchema = new mongoose.Schema({
  word: { type: String, required: true },
  userId: { type: String, required: true },
  easeFactor: { type: Number, default: 2.5 },
  interval: { type: Number, default: 1 },
  nextReviewDate: { type: Date, default: Date.now },
  pronunciationHistory: [
    {
      date: { type: Date, default: Date.now },
      pronunciationAccuracy: Number,
      feedback: String,
    },
  ],
});

module.exports = mongoose.model('Word', WordSchema);

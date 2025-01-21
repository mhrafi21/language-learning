const { analyzePronunciation } = require('../utils/phoneticAnalysis');
const Word = require('../models/word');

const analyzePronunciationFeedback = async (req, res) => {
  const { audio, word, userId } = req.body;

  try {
    const transcription = "mock transcription"; // Replace with Speech-to-Text API
    const analysis = await analyzePronunciation(transcription, word);

    const wordData = await Word.findOne({ word, userId });
    wordData.pronunciationHistory.push({
      pronunciationAccuracy: analysis.pronunciationAccuracy,
      feedback: analysis.feedback,
    });
    await wordData.save();

    res.json(analysis);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error in pronunciation analysis.' });
  }
};

module.exports = { analyzePronunciationFeedback };

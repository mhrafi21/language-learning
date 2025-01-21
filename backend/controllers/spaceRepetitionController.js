const { calculateNextReview } = require('../utils/spacedRepetition');
const Word = require('../models/word');

const updateReviewSchedule = async (req, res) => {
  const { word, userId, rating } = req.body;

  try {
    const wordData = await Word.findOne({ word, userId });
    const { newEaseFactor, newInterval, nextReviewDate } = calculateNextReview(
      rating,
      wordData.easeFactor,
      wordData.interval
    );

    wordData.easeFactor = newEaseFactor;
    wordData.interval = newInterval;
    wordData.nextReviewDate = nextReviewDate;
    await wordData.save();

    res.json({ success: true });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error updating review schedule.' });
  }
};

module.exports = { updateReviewSchedule };

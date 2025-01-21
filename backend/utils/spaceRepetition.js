const calculateNextReview = (rating, easeFactor, interval) => {
    let newEaseFactor = easeFactor + (0.1 - (5 - rating) * (0.08 + (5 - rating) * 0.02));
    newEaseFactor = Math.max(newEaseFactor, 1.3);
  
    const newInterval = interval === 1
      ? 1
      : interval * newEaseFactor;
  
    const nextReviewDate = new Date(Date.now() + newInterval * 24 * 60 * 60 * 1000);
  
    return { newEaseFactor, newInterval, nextReviewDate };
  };
  
  module.exports = { calculateNextReview };
  
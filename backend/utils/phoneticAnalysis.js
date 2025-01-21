const analyzePronunciation = async (transcription, word) => {
    // Mock analysis
    const pronunciationAccuracy = Math.random() * 100; // Example: 85%
    const feedback = pronunciationAccuracy > 75
      ? "Good pronunciation!"
      : "Focus on the stress and clarity.";
  
    return { pronunciationAccuracy, feedback };
  };
  
  module.exports = { analyzePronunciation };
  
const express = require('express');
const { analyzePronunciationFeedback } = require('../controllers/pronunciationController');
const router = express.Router();

router.post('/feedback', analyzePronunciationFeedback);

module.exports = router;

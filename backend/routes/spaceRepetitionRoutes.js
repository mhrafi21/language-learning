const express = require('express');
const { updateReviewSchedule } = require('../controllers/spacedRepetitionController');
const router = express.Router();

router.post('/update-schedule', updateReviewSchedule);

module.exports = router;

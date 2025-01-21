const express = require('express');
const { updateReviewSchedule } = require('../controllers/spaceRepetitionController');
const router = express.Router();

router.post('/update-schedule', updateReviewSchedule);

module.exports = router;

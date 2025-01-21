const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const pronunciationRoutes = require('./routes/pronunciationRoutes');
const spacedRepetitionRoutes = require('./routes/spacedRepetitionRoutes');

const app = express();
app.use(bodyParser.json());

app.use('/api/pronunciation', pronunciationRoutes);
app.use('/api/spaced-repetition', spacedRepetitionRoutes);

mongoose.connect('mongodb://localhost:27017/learning', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => console.log('Database connected!'));

module.exports = app;

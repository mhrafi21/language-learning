const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const pronunciationRoutes = require("./routes/pronunciationRoutes");
const spacedRepetitionRoutes = require('./routes/spaceRepetitionRoutes');

const app = express();
app.use(bodyParser.json());

app.use('/api/pronunciation', pronunciationRoutes);
app.use('/api/spaced-repetition', spacedRepetitionRoutes);

// mongodb pass: t0gTKzSSITt5GndP

mongoose.connect('mongodb+srv://learning:t0gTKzSSITt5GndP@cluster0.03occsr.mongodb.net/learningLanguage?retryWrites=true&w=majority&appName=Cluster0', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => console.log('Database connected!'));

module.exports = app;

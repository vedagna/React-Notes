// models/Note.js
const mongoose = require('mongoose');

const noteSchema = new mongoose.Schema({
  title: { type: String, required: true },
  content: { type: String, required: true },
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true }, // Link to the User model
  createdAt: { type: Date, default: Date.now },
});

const Note = mongoose.model('Note', noteSchema);

module.exports = Note;

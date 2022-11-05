const mongoose = require('mongoose');

const sketchSchema = new mongoose.Schema({
  sketch: [{ x: Number, y: Number }],
  user: {
    type: mongoose.Schema.ObjectId,
    ref: 'User',
    required: [true, 'Booking must belong to a user!']
  }
});

const Sketch = mongoose.model('Sketch', sketchSchema);

module.exports = Sketch;

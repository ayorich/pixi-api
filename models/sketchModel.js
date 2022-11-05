const mongoose = require('mongoose');

const sketchSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [false, 'Please provide sketch name']
  },
  sketch: mongoose.Schema.Types.Mixed,
  user: [
    {
      type: mongoose.Schema.ObjectId,
      ref: 'User',
      required: [true, 'Booking must belong to a user!']
    }
  ]
});

const Sketch = mongoose.model('Sketch', sketchSchema);

module.exports = Sketch;

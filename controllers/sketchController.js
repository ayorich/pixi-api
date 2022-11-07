const Sketch = require('./../models/sketchModel');
const factory = require('./handlerFactory');
const catchAsync = require('../utils/catchAsync');

exports.createSketch = factory.createOne(Sketch);
exports.getSketch = factory.getOne(Sketch, 'user');
exports.getAllSketches = factory.getAll(Sketch);
exports.deleteSketch = factory.deleteOne(Sketch);

exports.updateSketch = catchAsync(async (req, res, next) => {
  const doc = await Sketch.findByIdAndUpdate(
    req.params.id,
    {
      sketch: req.body.sketch,
      $addToSet: { user: req.body.user }
    },
    {
      new: true,
      runValidators: true
    }
  );

  if (!doc) {
    return next(new AppError('No document found with that ID', 404));
  }

  res.status(200).json({
    status: 'success',
    data: {
      data: doc
    }
  });
});

const Sketch = require('./../models/sketchModel');
const factory = require('./handlerFactory');

exports.createSketch = factory.createOne(Sketch);
exports.getSketch = factory.getOne(Sketch, 'user');
exports.getAllSketches = factory.getAll(Sketch);
exports.updateSketch = factory.updateOne(Sketch);
exports.deleteSketch = factory.deleteOne(Sketch);

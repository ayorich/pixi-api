const express = require('express');
const sketchController = require('./../controllers/sketchController');

const router = express.Router();

router
  .route('/')
  .get(sketchController.getAllSketches)
  .post(sketchController.createSketch);

router
  .route('/:id')
  .get(sketchController.getSketch)
  .patch(sketchController.updateSketch)
  .delete(sketchController.deleteSketch);

module.exports = router;

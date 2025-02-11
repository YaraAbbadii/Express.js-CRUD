const express = require("express");
const router = express.Router();
const coursesController = require("../controllers/courses.controllers");
const { validationSchema } = require("../middlewares/validationSchema");

router
  .route("/")
  .get(coursesController.getAllCourse)
  .post(validationSchema(), coursesController.addCourse);

router
  .route("/:courseId")
  .get(coursesController.getCourse)
  .patch(coursesController.updateCourse)
  .delete(coursesController.deleteCourse);

module.exports = router;

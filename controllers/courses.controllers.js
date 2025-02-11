const { courses } = require("../data/courses");
const { body, validationResult } = require("express-validator");

const getAllCourse = (req, res) => {
  res.json(courses);
};

const getCourse = (req, res) => {
  // + to make it always number
  const courseId = +req.params.courseId;
  const course = courses.find((course) => course.id === courseId);
  if (!course) {
    res.status(404).send("No courses found");
  }
  res.json(course);
};

const addCourse = (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json(errors.array());
  }

  const course = { id: courses.length + 1, ...req.body };
  courses.push(course);
  res.status(201).json(course);
};

const updateCourse = (req, res) => {
  const courseId = +req.params.courseId;
  let course = courses.find((course) => course.id === courseId);
  if (!course) {
    res.status(404).json({ msg: "course not found" });
  }

  // show the current courses + the body added (merge)
  course = { ...course, ...req.body };

  res.status(200).json(course);
};

const deleteCourse = (req, res) => {
  const courseId = +req.params.courseId;
  let course = courses.find((course) => course.id === courseId);
  if (!course) {
    res.status(404).json({ msg: "course not found" });
  }

  // show the current courses + the body added (merge)
  course = { ...course, ...req.body };

  res.status(200).json(course);
};

module.exports = {
  getAllCourse,
  getCourse,
  addCourse,
  updateCourse,
  deleteCourse,
};

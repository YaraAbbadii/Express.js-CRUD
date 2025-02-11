const { body } = require("express-validator");

const validationSchema = () => {
  return [
    body("title")
      .notEmpty()
      .withMessage("title is required")
      .bail()
      .isLength({ min: 2 })
      .withMessage("title should be 2 digits at least"),

    body("price").notEmpty().withMessage("price is required"),
  ];
};

module.exports = { validationSchema };

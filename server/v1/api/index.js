var express = require("express");
var router = express.Router();
var path = require("path");
var auth = require("../routes/auth");
var multipart = require("connect-multiparty");
var multipartMiddleware = multipart();
import familyRouter from "./controllers/Family/router";

router.use("/family", multipartMiddleware, familyRouter);

router.use(function (err, req, res, next) {
  if (err.name === "ValidationError") {
    return res.json({
      status: false,
      msg: "Unprocessable Entity",
      data: {
        errors: Object.keys(err.errors).reduce(function (errors, key) {
          errors[key] = err.errors[key].message;
          return errors;
        }, {})
      }
    });
  }
  return next(err);
});

module.exports = router;

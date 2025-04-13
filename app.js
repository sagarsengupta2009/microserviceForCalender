// if(process.env.NODE_ENV !== 'production') {
//   require('dotenv').config()
// }

var createError = require("http-errors");
var express = require("express");
const dotenv = require("dotenv");
var path = require("path");
const mongoose = require("mongoose");
const { errorHandler } = require("./middleware/errorMiddleware");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
var cors = require("cors");
var bodyParser = require("body-parser");
const flash = require("express-flash");
const session = require("express-session");
const passport = require("passport");
// const initializePassport = require('./passport-config');
// initializePassport(passport, email => {

// })

var indexRouter = require("./routes/index");
const { init } = require("mongoose/lib/model");
const { initialize } = require("passport");
// const passport = require('passport');

var app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(flash());
app.use(
  session({
    secret: `secret`,
    resave: false,
    saveUninitialized: false,
  })
);
// app.use(passport.initialize());
// app.use(passport.session())

// view engine setup

// Map global promise - get rid of warning
mongoose.Promise = global.Promise;

//connect to mongoose
mongoose
  .connect("mongodb://127.0.0.1/microservice", {})
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log(err));

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "dist/calender-app")));

app.use("/", indexRouter);
// app.use(errorHandler);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

app.use("*", (req, res) => {
  res.sendFile(path.join(__dirname, "dist/calender-app", "index.html"));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;

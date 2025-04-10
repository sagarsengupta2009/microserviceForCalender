var express = require('express');
const { login, register } = require('../controllers/userController');
const { calenderDates, getEvents, deleteEvent } = require('../controllers/eventsController');
var router = express.Router();
// const passport = require('passport');
// const initializePassport = require('./passport-config');
// initializePassport(passport, email => {

// })

const middleware = (req, res, next) => {
  if (!req.query.name) {
    res.sendStatus(401);
  }
  next();
}

/*Login user*/
router.post('/login', login)

// router.post('/login', async function(req, res) {
//   const {email, password} = req.body
//   const data = await loginUser(email, password);
//   console.log(email, password)
//   res.send({email, password});
// })

/*Register user*/
router.post('/register', register)

// router.post('/register', async function(req, res) {
//   const {name, email, password} = req.body;
//   console.log(req.body)
//   console.log(name, email, password)
//   try {
//     const hashedPwd = await bcrypt.hash(password, 10);
//     const data = await registerUser(name, email, hashedPwd);
//     console.log(name, email, hashedPwd, 'sagar');
//     res.send({name, email, password});
//   } catch(e) {
//     res.send('Oops! Something went wrong.');
//     console.log('failure');
//   }  
// }) 

/* GET home page. */
router.post('/calenderdates', calenderDates)

// router.post('/calenderdates', async function(req, res) {
//   let {id,title,date} = req.body;
//   let data = await createEvent(id,title,date);
//   res.send(data);
// });

/* Get Calender Events */
router.get('/getEvents', getEvents);

// router.get('/getEvents', async function(req, res) {
//   let data = await getEvents();
//   console.log(data);
//   res.send(data);
// });

/* Delete one event */
router.delete('/deleteEvent/:id', deleteEvent)

// router.delete('/deleteEvent/:id', async function(req, res) {
//   const eventId = req.params.id;
//   console.log(eventId);
//   // console.log(req);
//   // console.log('sagar')
//   let data = await deleteEvent(eventId);
//   res.send(data);
// });

module.exports = router;

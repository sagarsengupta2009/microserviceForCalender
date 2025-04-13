const {
  createEventFC,
  getEventsFC,
  editEventFC,
  deleteEventFC,
} = require("../services/event.service");

const calenderDates = async (req, res) => {
  let { id, title, date } = req.body;
  // if (!title || !date) {
  //     console.log("error stack starts")
  //     res.status(400)
  //     throw new Error('Missing fields in post data!')
  // }
  let data = await createEventFC(id, title, date);
  res.status(200).send(data);
};

const getEvents = async (req, res) => {
  let data = await getEventsFC();
  console.log(data);
  res.send(data);
};

const editEvent = async (req, res) => {
  let { id, title, date } = req.body;
  console.log("id:" + id);
  // console.log(req);
  // console.log('sagar')
  let data = await editEventFC(id, title, date);
  // console.log(data);
  res.status(200).send(data);
};

const deleteEvent = async (req, res) => {
  const eventId = req.params.id;
  console.log(eventId);
  // console.log(req);
  // console.log('sagar')
  let data = await deleteEventFC(eventId);
  res.status(200).send(data);
};

module.exports = {
  calenderDates,
  getEvents,
  editEvent,
  deleteEvent,
};

const EventSchema = require("../schema/event");

const createEvent = async (id, title, date) => {
  console.log(id, title, date, "santanu");
  let record = EventSchema.create({ id, title, date });
  return record;
};

const getEvents = async () => {
  let record = EventSchema.find({});
  return record;
}

const deleteEvent = async (id) => {
  let record = EventSchema.deleteOne({"id": id});
  return record;
}

module.exports = { createEvent , getEvents, deleteEvent};

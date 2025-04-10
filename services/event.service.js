const EventSchema = require("../schema/event");

const createEventFC = async (id, title, date) => {
  console.log(id, title, date, "santanu");
  let record = EventSchema.create({ id, title, date });
  return record;
};

const getEventsFC = async () => {
  let record = EventSchema.find({});
  return record;
}

const deleteEventFC = async (id) => {
  let record = EventSchema.deleteOne({ "id": id });
  return record;
}

module.exports = { createEventFC, getEventsFC, deleteEventFC };

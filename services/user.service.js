const { filter } = require("mongoose/lib/helpers/query/validOps");
const UserSchema = require("../schema/user");

const registerUserFC = async (name, email, password) => {
  let record = UserSchema.create({ name, email, password });
  return record;
};

const loginUserFC = async (email, password) => {
  let record = UserSchema.findOne({ email: email });
  return record;
};

// const createEvent = async (id, title, date) => {
//   console.log(id, title, date, "santanu");
//   let record = EventSchema.create({ id, title, date });
//   return record;
// };

// const getEvents = async () => {
//   let record = EventSchema.find({});
//   return record;
// }

// const deleteEvent = async (id) => {
//   let record = EventSchema.deleteOne({ "id": id });
//   return record;
// }

module.exports = { loginUserFC, registerUserFC };

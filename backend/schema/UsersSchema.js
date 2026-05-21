const {Schema} = require("mongoose");
const UsersSchema = new Schema({
  name: String,
  email: { type: String, unique: true },
  password: String,
});

module.exports = {UsersSchema};
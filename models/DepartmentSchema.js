const mongoose = require("mongoose");
const AutoIncrement = require('mongoose-sequence')(mongoose);



const schema = new mongoose.Schema({
  _id: {
    type: Number,
  },
  name: {
    type: String,
    required: true,
  },
  location: String,
},);

schema.plugin(AutoIncrement, { id: "eventAutoIncrementDepartment", inc_field: "_id" });
mongoose.model("departments", schema);

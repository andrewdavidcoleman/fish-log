const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const catchSchema = new Schema({
    caughtById: { type: String, required: true } ,
    inches: { type: Number, required: true },
    species: { type: String, required: true }
});

const Catch = mongoose.model("Catch", catchSchema);

module.exports = Catch;

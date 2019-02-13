//juegosSchema
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const P_mentalSchema = new Schema({
  p_mental: String,
  descripcion: String,
});

module.exports = mongoose.model("P_mental",P_mentalSchema);

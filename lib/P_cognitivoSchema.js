//juegosSchema
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const P_cogntivoSchema = new Schema({
  P_cognitivo: String,
  descripcion: String,
});

module.exports = mongoose.model("P_cognitivo",P_cogntivoSchema);

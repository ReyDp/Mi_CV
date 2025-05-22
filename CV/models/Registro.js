const mongoose = require('mongoose');

const registroSchema = new mongoose.Schema({
  nombre: String,
  especialidad: String,
  sexo: String,
  fecha: Date
});

module.exports = mongoose.model('Registro', registroSchema);

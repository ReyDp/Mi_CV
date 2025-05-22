const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const Registro = require('./models/Registro');
const app = express();
const cors = require('cors');

// Conexión a MongoDB
mongoose.connect('mongodb://localhost:27017/cvRegistros', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => console.log('📡 Conectado a MongoDB'))
.catch(err => console.error('Error en conexión MongoDB:', err));

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

// Ruta para guardar registros
app.post('/api/registros', async (req, res) => {
    try {
        const nuevoRegistro = new Registro(req.body);
        await nuevoRegistro.save();
        res.status(201).json({ mensaje: 'Registro guardado correctamente' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ mensaje: 'Error al guardar el registro' });
    }
});

// Iniciar servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor escuchando en http://localhost:${PORT}`);
});
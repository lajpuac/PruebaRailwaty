const express = require('express');
const cors = require('cors');
const app = express();

const PORT = process.env.PORT;
const DB_HOST = process.env.DB_HOST; 
const DB_PORT = process.env.DB_PORT; 
const DB_USER = process.env.DB_USER;
const DB_PASSWORD = process.env.DB_PASSWORD; 

app.use(cors());
app.use(express.json());

// Rutas básicas
app.get('/', (req, res) => {
  res.send('¡Backend funcionando en Railway!');
});

app.get('/usuarios', (req, res) => {
  res.json(usuarios);
});

app.post('/usuarios', (req, res) => {
  const nuevoUsuario = req.body;
  nuevoUsuario.id = usuarios.length + 1;
  usuarios.push(nuevoUsuario);
  res.status(201).json(nuevoUsuario);
});

app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`);
});

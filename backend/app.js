const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

// Configurar Jade
app.set('view engine', 'pug');

// Ruta HTML renderizada por Jade
app.get('/', (req, res) => {
  res.render('indexzz', { title: 'Backend Jade', message: 'Hola desde el backend con Jade!' });
});



// API ejemplo
app.get('/api/saludo', (req, res) => {
  res.json({ message: 'Hola desde el backend!' });
});

app.listen(4000, () => {
  console.log('Backend corriendo en http://localhost:4000');
});

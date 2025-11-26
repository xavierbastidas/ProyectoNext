import express from 'express';
import cors from 'cors';

const app = express();

app.use(cors());
app.use(express.json());

// Configurar Pug
app.set('view engine', 'pug');

// Ruta HTML renderizada por Pug
app.get('/', (req, res) => {
  res.render('index', { title: 'Backend Pug', message: 'Hola desde el backend con Pug!' });
});

// API ejemplo
app.get('/api/saludo', (req, res) => {
  res.json({ message: 'Hola desde el backend!' });
});

app.listen(4000, () => {
  console.log('Backend corriendo en http://localhost:4000');
});

import express from 'express';

const app = express();

const PORT = process.env.PORT || 3333;

app.use(express.json());

app.get('/users', (request, response) =>
  response.json({ message: 'Hello World' }),
);

app.listen(PORT, () => console.log(`🚀️ Servidor iniciado na porta ${PORT}`));

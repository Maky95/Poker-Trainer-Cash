// server/index.js
const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const app = express();

app.use(express.json());

let db = new sqlite3.Database(':memory:');

db.serialize(() => {
  db.run("CREATE TABLE moves (move TEXT, result TEXT)");
});

app.post('/api/move', (req, res) => {
  const move = req.body.move;
  let result = 'Jogada incorreta';

  // Simples lógica de exemplo
  if (move === 'raise') result = 'Jogada correta';

  db.run("INSERT INTO moves(move, result) VALUES(?, ?)", [move, result]);

  res.json({ message: result });
});

app.listen(3001, () => {
  console.log('Servidor rodando na porta 3001');
});
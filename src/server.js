const express = require('express');
const knex = require('./database');
const app = express();

app.get('/', (request, response) => {
  response.json({ info: 'Node.js, Express, and Postgres API' });
});

app.get('/teste', (request, response) => {
  const data = knex.select('*').from('users');

  console.log({
    data,
  });
});

app.post('/new', async (request, response) => {
  const payload = {
    id: 2,
    name: 'Jão',
  };
  const data = await knex('testes').insert(payload);

  console.log({
    data,
  });

  response.json(data);
});

app.listen('3000', () => {
  console.log('App started on port 3000');
});

const knex = require('../database');

module.exports = {
  async create() {
    const payload = {
      id: 1,
      name: 'John Doe',
    };
    await knex('testes').insert(payload);
  },
};

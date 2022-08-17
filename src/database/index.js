const knexfile = require('../../knexfile');
const knex = require('knex')(knexfile['development']);

module.exports = knex;

// const knex = require('knex')({
//   client: 'postgresql',
//   connection: {
//     host: '137.184.24.93',
//     user: 'myStockProd',
//     password: 'myStockProd',
//     database: 'postgres',
//     port: 49157,
//   },
// });

import Knex from 'knex';
import Bookshelf from 'bookshelf';

const knex = Knex({
  client: 'sqlite3',
  connection: {
    filename: 'gatekeeper.db'
  }
});

const bookshelf = Bookshelf(knex);

export default bookshelf;
exports.up = function(knex, Promise) {
  return knex.schema.createTable('refresh_tokens', function(table) {
    table.increments('id').unsigned().primary();
    table.integer('refresh_token').notNull();
    table.integer('user_id').notNull();
    table.dateTime('created_at').notNull();
    table.dateTime('updated_at').nullable();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('records');
};
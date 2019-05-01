exports.up = function(knex, Promise) {
  return knex.schema.createTable('records', function(table) {
    table.increments('id').unsigned().primary();
    table.integer('user_id');
    table.integer('gate_id');
    table.dateTime('created_at').notNull();
    table.dateTime('updated_at').nullable();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('records');
};
exports.up = function(knex, Promise) {
  return knex.schema.createTable('gates', function(table) {
    table.increments('id').unsigned().primary();
    table.string('name').notNull();
    table.integer('gpio_pin').notNull();
    table.integer('duration').notNull();
    table.dateTime('created_at').notNull();
    table.dateTime('updated_at').nullable();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('gates');
};
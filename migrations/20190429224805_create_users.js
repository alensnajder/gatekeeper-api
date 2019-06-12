exports.up = function(knex, Promise) {
  return knex.schema.createTable('users', function(table) {
    table.increments('id').unsigned().primary();
    table.string('first_name').notNull();
    table.string('last_name').notNull();
    table.string('email').notNull();
    table.string('password').notNull();
    table.boolean('is_admin').notNull();
    table.boolean('is_active').notNull();
    table.dateTime('created_at').notNull();
    table.dateTime('updated_at').nullable();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('users');
};
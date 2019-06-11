import bookshelf from '../config/bookshelf';

const Role = bookshelf.Model.extend({
  tableName: 'roles',
  hasTimestamps: false
});

export default Role;
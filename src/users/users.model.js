import bookshelf from '../config/bookshelf';

const User = bookshelf.Model.extend({
  tableName: 'users',
  hasTimestamps: true
});

export default User;
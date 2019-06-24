import bookshelf from '../config/bookshelf';
import User from '../users/users.model';

const RefreshToken = bookshelf.Model.extend({
  tableName: 'refresh_tokens',
  hasTimestamps: true,
  user: function() {
    return this.belongsTo(User);
  }
});

export default RefreshToken;
import bookshelf from '../config/bookshelf';
import User from '../users/users.model';
import Gate from '../gates/gates.model';

const Record = bookshelf.Model.extend({
  tableName: 'records',
  hasTimestamps: true,
  user: function() {
    return this.belongsTo(User);
  },
  gate: function() {
    return this.belongsTo(Gate);
  }
});

export default Record;
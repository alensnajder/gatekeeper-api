import bookshelf from '../config/bookshelf';

const Gate = bookshelf.Model.extend({
  tableName: 'gates',
  hasTimestamps: true
});

export default Gate;
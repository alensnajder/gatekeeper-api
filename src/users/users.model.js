import bookshelf from '../config/bookshelf';
import bcrypt from 'bcrypt';
import Record from '../records/records.model';

const User = bookshelf.Model.extend({
  tableName: 'users',
  hasTimestamps: true,
  hidden: ['password'],
  parse: function (attrs) {
    attrs['is_active'] = !!attrs['is_active'];
    attrs['is_admin'] = !!attrs['is_admin'];
    return attrs;
  },
  records: function() {
    return this.hasMany(Record);
  },
  async validPassword(password) {
    return await bcrypt.compare(password, this.attributes.password);
  },
  initialize() {
    this.on('saving', async(model) => {
      if (!model.hasChanged('password')) {
        return;
      }
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(model.attributes.password, salt);
      model.set('password', hashedPassword);
    });
  }
});

export default User;
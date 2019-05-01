import Record from './records.model';

export async function get(req, res, next) {
  try {
    const records = await Record.fetchAll({ withRelated: ['user', 'gate'] });
    return res.status(200).json(records);
  } catch (err) {
    return res.status(500).json(err);
  }
}

export async function getById(req, res, next) {
  try {
    const record = await Record.forge({ id: req.params.id }).fetch({ withRelated: ['user', 'gate'] });

    if (!record) {
      return res.status(404).json('Not found');
    }

    return res.status(200).json(record);
  } catch (err) {
    return res.status(500).json(err);
  }
}

export async function create(req, res, next) {
  try {
    await Record.forge(req.body).save();
    return res.status(200).send();
  } catch (err) {
    return res.status(500).json(err);
  }
}
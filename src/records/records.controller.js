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
    const userId = req.user.id;
    const newRecord = {
      user_id: userId,
      gate_id: req.body.gate_id
    };
    await Record.forge(newRecord).save();
    return res.status(200).send();
  } catch (err) {
    return res.status(500).json(err);
  }
}

export async function remove(req, res, next) {
  try {
     const record = await Record.forge({ id: req.params.id }).fetch();

    if (!record) {
      return res.status(404).json('Not found');
    }

    await record.destroy();
    return res.status(200).send();
  } catch (err) {
    return res.status(500).json(err);
  }
}
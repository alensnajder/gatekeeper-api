import Record from './records.model';

export async function create(req, res, next) {
  try {
    await Record.forge(req.body).save();
    return res.status(200).send();
  } catch (err) {
    return res.status(500).json(err);
  }
}
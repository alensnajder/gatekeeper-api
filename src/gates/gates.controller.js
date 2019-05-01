import Gate from './gates.model';

export async function create(req, res, next) {
  try {
    await Gate.forge(req.body).save();
    return res.status(201).send();
  } catch (err) {
    return res.status(500).json(err);
  }
}
import Gate from './gates.model';

export async function get(req, res, next) {
  try {
    const gates = await Gate.fetchAll();
    return res.status(200).json(gates);
  } catch (err) {
    return res.status(500).json(err);
  }
}

export async function create(req, res, next) {
  try {
    await Gate.forge(req.body).save();
    return res.status(201).send();
  } catch (err) {
    return res.status(500).json(err);
  }
}
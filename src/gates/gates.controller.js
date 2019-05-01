import Gate from './gates.model';

export async function get(req, res, next) {
  try {
    const gates = await Gate.fetchAll();
    return res.status(200).json(gates);
  } catch (err) {
    return res.status(500).json(err);
  }
}

export async function getById(req, res, next) {
  try {
    const gate = await Gate.forge({ id: req.params.id }).fetch();

    if (!gate) {
      return res.status(404).json('Not found');
    }

    return res.status(200).json(gate);
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

export async function update(req, res, next) {
  try {
    const gate = await Gate.forge({ id: req.params.id }).fetch();

    if (!gate) {
      return res.status(404).json('Not found');
    }

    await gate.save(req.body);
    return res.status(200).json(gate);
  } catch (err) {
    return res.status(500).json(err);
  }
}

export async function remove(req, res, next) {
  try {
    const gate = await Gate.forge({ id: req.params.id }).fetch();

    if (!gate) {
      return res.status(404).json('Not found');
    }

    await gate.destroy();
    return res.status(200).send();
  } catch (err) {
    return res.status(500).json(err);
  }
}
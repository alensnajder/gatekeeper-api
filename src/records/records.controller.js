import Record from './records.model';
import Gate from '../gates/gates.model';
import * as GatesWhisperer from '../gates/gates.whisperer';

export async function get(req, res, next) {
  try {
    const records = await Record.fetchAll({ withRelated: ['user', 'gate'] });
    return res.status(200).json(records);
  } catch (err) {
    return res.status(500).send();
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
    return res.status(500).send();
  }
}

export async function create(req, res, next) {
  try {
    const record = {
      user_id: req.user.id,
      gate_id: req.body.gate_id
    };
    
    const gate = await Gate.forge({ id: record.gate_id }).fetch();
    
    if (!gate) {
      return res.status(404).send();
    }

    GatesWhisperer.toggle(gate.toJSON().gpio_pin, gate.toJSON().duration);
    const savedRecord = await Record.forge(record).save();
    return res.status(201).json(savedRecord);
  } catch (err) {
    return res.status(500).send();
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
    return res.status(500).send();
  }
}
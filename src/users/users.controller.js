import User from './users.model';

export async function get(req, res, next) {
  try {
    const users = await User.fetchAll();
    return res.status(200).json(users);
  } catch (err) {
    return res.status(500).json(err);
  }
}

export async function getById(req, res, next) {
  try {
    const user = await User.forge({ id: req.params.id }).fetch();

    if (!user) {
      return res.status(404).json('Not found');
    }

    return res.status(200).json(user);
  } catch (err) {
    return res.status(500).json(err);
  }
}

export async function create(req, res, next) {
  try {
    const user = await User.forge({ email: req.body.email }).fetch();
  
    if (user) {
      return res.json('User with that e-mail address already exists');
    }
  
    await User.forge(req.body).save();
    return res.status(201).send();
  } catch (err) {
    return res.status(500).json(err);
  }
}

export async function update(req, res, next) {
  try {
    const user = await User.forge({ id: req.params.id }).fetch();

    if (!user) {
      return res.status(404).json('Not found');
    }

    await user.save(req.body);
    return res.status(200).json(user);
  } catch (err) {
    return res.status(500).json(err);
  }
}
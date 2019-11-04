import User from './users.model';

export async function get(req, res, next) {
  try {
    const users = await User.fetchAll();
    return res.status(200).json(users);
  } catch (err) {
    return res.status(500).send();
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
    return res.status(500).send();
  }
}

export async function create(req, res, next) {
  try {
    const existingUser = await User.forge({ email: req.body.email }).fetch();

    if (existingUser) {
      return res.status(409).send();
    }

    let user = req.body;
    user.is_active = false;
    user.is_admin = false;
    delete user.confirm_password;

    const numberOfUsers = await User.count();
    
    if (numberOfUsers === 0) {
      user.is_active = true;
      user.is_admin = true;
    }

    const savedUser = await User.forge(user).save();
    return res.status(201).json(savedUser);
  } catch (err) {
    return res.status(500).send();
  }
}

export async function remove(req, res, next) {
  try {
    const user = await User.forge({ id: req.params.id }).fetch();

    if (!user) {
      return res.status(404).send();
    }

    await user.destroy();
    return res.status(200).send();
  } catch (err) {
    return res.status(500).send();
  }
}

export async function updateStatus(req, res, next) {
  try {
    const { is_active } = req.body;
    let user = await User.forge({ id: req.params.id }).fetch();
    const savedUser = await user.save({ is_active });
    return res.status(200).json(savedUser);
  } catch (err) {
    return res.status(500).send();
  }
}
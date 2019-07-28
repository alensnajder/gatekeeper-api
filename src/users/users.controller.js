import User from './users.model';

export async function get(req, res, next) {
  try {
    if (!req.user.is_admin) {
      return res.status(403).json('Forbidden');
    }

    const users = await User.fetchAll();
    return res.status(200).json(users);
  } catch (err) {
    return res.status(500).json(err);
  }
}

export async function getById(req, res, next) {
  try {
    const userId = parseInt(req.params.id);
    if (!req.user.is_admin && req.user.id !== userId) {
      return res.status(403).json('Forbidden');
    }

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

    let newUser = {
      email: req.body.email,
      first_name: req.body.first_name,
      last_name: req.body.last_name,
      password: req.body.password
    };

    const numberOfUsers = await User.count();

    if (numberOfUsers > 0) {
      newUser.is_admin = false;
      newUser.is_active = false;
    } else {
      newUser.is_admin = true;
      newUser.is_active = true;
    }

    await User.forge(newUser).save();
    return res.status(201).json(newUser);
  } catch (err) {
    return res.status(500).json(err);
  }
}

export async function update(req, res, next) {
  try {
    const userId = parseInt(req.params.id);
    if (!req.user.is_admin && req.user.id !== userId) {
      return res.status(403).json('Forbidden');
    }

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

export async function remove(req, res, next) {
  try {
    const userId = parseInt(req.params.id);
    if (!req.user.is_admin && req.user.id !== userId) {
      return res.status(403).json('Forbidden');
    }

    const user = await User.forge({ id: req.params.id }).fetch();

    if (!user) {
      return res.status(404).json('Not found');
    }

    await user.destroy();
    return res.status(200).send();
  } catch (err) {
    return res.status(500).json(err);
  }
}

export async function getByIdWithRecords(req, res, next) {
  try {
    const userId = parseInt(req.params.id);
    if (!req.user.is_admin && req.user.id !== userId) {
      return res.status(403).json('Forbidden');
    }
    
    const user = await User.forge({ id: req.params.id }).fetch({ withRelated: ['records'] });

    if (!user) {
      return res.status(404).json('Not found');
    }

    return res.status(200).json(user);
  } catch (err) {
    return res.status(500).json(err);
  }
}
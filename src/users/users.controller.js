import User from './users.model';

export async function get(req, res, next) {
  try {
    const users = await User.fetchAll({ withRelated: ['roles'] });
    return res.status(200).json(users);
  } catch (err) {
    return res.status(500).json(err);
  }
}

export async function getById(req, res, next) {
  try {
    const user = await User.forge({ id: req.params.id }).fetch({ withRelated: ['roles'] });

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

    let newUser = req.body;
    const numberOfUsers = await User.count();

    if (numberOfUsers > 0) {
      newUser.role = 'user';
    } else {
      newUser.role = 'admin';
    }

    await User.forge(newUser).save();
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

export async function remove(req, res, next) {
  try {
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
    const user = await User.forge({ id: req.params.id }).fetch({ withRelated: ['records'] });

    if (!user) {
      return res.status(404).json('Not found');
    }

    return res.status(200).json(user);
  } catch (err) {
    return res.status(500).json(err);
  }
}
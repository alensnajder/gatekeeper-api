import jwt from 'jsonwebtoken';
import User from '../users/users.model';

export async function getAccessToken(req, res, next) {
  try {
    const { email, password } = req.body;
    const user = await User.forge({ email }).fetch();
    if (!user) {
      return res.status(401).json('Wrong email or password');
    }
    const isValidPassword = await user.validPassword(password);
    if (isValidPassword) {
      const token = jwt.sign(user.toJSON(), 'secret');
      return res.json({ token: token });
    } else {
      return res.status(401).json('Wrong email or password');
    }
  } catch (err) {
    return res.status(500).json(err);
  }
}
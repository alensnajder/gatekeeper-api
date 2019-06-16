import jwt from 'jsonwebtoken';
import User from '../users/users.model';
import RefreshToken from './refreshToken.model';

export async function getAccessToken(req, res, next) {
  try {
    const grantType = req.query.grant_type;

    switch (grantType) {
      case 'password':
        const { email, password } = req.body;
        const user = await User.forge({ email }).fetch();

        if (!user) {
          return res.status(401).json('Wrong email or password');

        }

        const isValidPassword = await user.validPassword(password);

        if (isValidPassword) {
          const accessToken = jwt.sign(user.toJSON(), process.env.ACCESS_TOKEN_SECRET, { expiresIn: process.env.ACCESS_TOKEN_SECRET_EXPIRATION });
          const refreshToken = jwt.sign(user.toJSON(), process.env.REFRESH_TOKEN_SECRET, { expiresIn: process.env.REFRESH_TOKEN_SECRET_EXPIRATION });

          await RefreshToken.forge({ refresh_token: refreshToken, user_id: user.id }).save();

          return res.json({
            access_token: accessToken,
            refresh_token: refreshToken
          });
        } else {
          return res.status(401).json('Wrong email or password');
        }
        break;
      case 'refresh_token':
        const { refresh_token } = req.body;
        const refreshToken = await RefreshToken.forge({ refresh_token }).fetch();
        if (refreshToken) {
          const user = await User.forge({ id: refreshToken.toJSON().user_id }).fetch();
          const accessToken = jwt.sign(user.toJSON(), process.env.ACCESS_TOKEN_SECRET, { expiresIn: process.env.ACCESS_TOKEN_SECRET_EXPIRATION });
          return res.json({
            access_token: accessToken
          });
        }

        return res.json('Unauthorized');

        break;
    }
  } catch (err) {
    return res.status(500).json(err);
  }
}
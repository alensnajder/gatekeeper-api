import jwt from 'jsonwebtoken';
import User from '../users/users.model';
import RefreshToken from './auth.model';
import uuidv4 from 'uuid/v4';

export async function getAccessToken(req, res, next) {
  const grantType = req.query.grant_type;

  switch (grantType) {
    case 'password':
      getAccessTokenByPasword(req, res);
      break;
    case 'refresh_token':
      getAccessTokenByRefreshToken(req, res);
      break;
  }
}

async function getAccessTokenByPasword(req, res) {
  const { email, password } = req.body;
  const existingUser = await User.forge({ email }).fetch();

  if (!existingUser) {
    return res.status(401).send();
  }

  const isValidPassword = await existingUser.validPassword(password);
  
  if (isValidPassword) {
    const accessToken = generateAccessToken(existingUser.toJSON());
    const refreshToken = uuidv4();

    await RefreshToken.forge({ refresh_token: refreshToken, user_id: existingUser.id }).save();

    return res.status(200).json({
      access_token: accessToken,
      refresh_token: refreshToken
    });
  } else {
    return res.status(401).send();
  }
}

async function getAccessTokenByRefreshToken(req, res) {
  const { refresh_token } = req.body;
  const refreshToken = await RefreshToken.forge({ refresh_token }).fetch();

  if (!refreshToken) {
    return res.status(401).send();
  }

  const user = await User.forge({ id: refreshToken.toJSON().user_id }).fetch();
  const accessToken = generateAccessToken(user.toJSON());

  return res.status(200).json({
    access_token: accessToken
  });
}

function generateAccessToken(user) {
  const accessToken = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, {
    expiresIn: process.env.ACCESS_TOKEN_SECRET_EXPIRATION
  });

  return accessToken;
}
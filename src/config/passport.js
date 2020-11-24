import passport from 'passport';
import { ExtractJwt, Strategy as JwtStrategy } from 'passport-jwt';
import User from '../users/users.model';

passport.use(new JwtStrategy({
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: process.env.ACCESS_TOKEN_SECRET
  },
  async (payload, done) => {
    try {
      const user = await User.forge({ id: payload.id }).fetch();
      if (!user) {
        return done(null, false);
      }
      return done(null, user.toJSON());
    } catch (err) {
      return done(err);
    }
  }
));
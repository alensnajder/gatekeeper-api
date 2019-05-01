import express from 'express';
import passport from 'passport';
import authRouter from './auth/auth.router';
import usersRouter from './users/users.router';
import gatesRouter from './gates/gates.router';
import recordsRouter from './records/records.router';
import passportConfig from './config/passport';

const app = express();

app.use(express.json());
app.use(passport.initialize());

app.use('/v1/auth', authRouter);
app.use('/v1/users', usersRouter);
app.use('/v1/gates', gatesRouter);
app.use('/v1/records', recordsRouter);

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
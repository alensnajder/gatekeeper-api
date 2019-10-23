import express from 'express';
import dotenv from 'dotenv/config';
import passport from 'passport';
import morgan from 'morgan';
import authRouter from './auth/auth.router';
import usersRouter from './users/users.router';
import gatesRouter from './gates/gates.router';
import recordsRouter from './records/records.router';
import passportConfig from './config/passport';

const app = express();

app.use(express.json());
app.use(morgan('dev'));
app.use(passport.initialize());

console.log(app.get('env'));

app.use('/v1/auth', authRouter);
app.use('/v1/users', usersRouter);
app.use('/v1/gates', gatesRouter);
app.use('/v1/records', recordsRouter);

app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});
import express from 'express';
import usersRouter from './users/users.router';

const app = express();

app.use(express.json());

app.use('/v1/users', usersRouter);

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
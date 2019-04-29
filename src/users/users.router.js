import express from 'express';
import * as UsersController from './users.controller';

const router = express.Router();

router.post('/', UsersController.create);

export default router;
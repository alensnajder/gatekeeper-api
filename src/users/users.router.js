import express from 'express';
import * as UsersController from './users.controller';

const router = express.Router();

router.get('/', UsersController.get);
router.post('/', UsersController.create);

export default router;
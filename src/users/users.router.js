import express from 'express';
import * as UsersController from './users.controller';
import passport from 'passport';
import { createUserValidator, updateUserStatusValidator } from './users.validator';
import isAdmin from '../middlewares/isAdmin';

const router = express.Router();

router.get('/', passport.authenticate('jwt', { session: false }), UsersController.get);
router.get('/:id', passport.authenticate('jwt', { session: false }), UsersController.getById);
router.post('/', createUserValidator, UsersController.create);
router.post('/:id/status', passport.authenticate('jwt', { session: false }), updateUserStatusValidator, isAdmin(), UsersController.updateStatus);
router.delete('/:id', passport.authenticate('jwt', { session: false }), isAdmin(), UsersController.remove);

export default router;
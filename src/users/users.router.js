import express from 'express';
import * as UsersController from './users.controller';
import passport from 'passport';

const router = express.Router();

router.get('/', passport.authenticate('jwt', { session: false }), UsersController.get);
router.get('/:id', passport.authenticate('jwt', { session: false }), UsersController.getById);
router.get('/:id/records', passport.authenticate('jwt', { session: false }), UsersController.getByIdWithRecords);
router.post('/', UsersController.create);
router.put('/:id', passport.authenticate('jwt', { session: false }), UsersController.update);
router.delete('/:id', passport.authenticate('jwt', { session: false }), UsersController.remove);

export default router;
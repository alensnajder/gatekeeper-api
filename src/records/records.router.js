import express from 'express';
import passport from 'passport';
import * as RecordsController from './records.controller';

const router = express.Router();

router.get('/', passport.authenticate('jwt', { session: false }), RecordsController.get);
router.get('/:id', passport.authenticate('jwt', { session: false }), RecordsController.getById);
router.post('/', passport.authenticate('jwt', { session: false }), RecordsController.create);
router.delete('/:id', passport.authenticate('jwt', { session: false }), RecordsController.remove);

export default router;
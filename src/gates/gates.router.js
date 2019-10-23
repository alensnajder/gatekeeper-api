import express from 'express';
import passport from 'passport';
import * as GatesController from './gates.controller';
import { createGateValidator, updateGateValidator } from './gates.validator';
import isAdmin from '../middlewares/isAdmin';

const router = express.Router();

router.get('/', passport.authenticate('jwt', { session: false }), GatesController.get);
router.get('/:id', passport.authenticate('jwt', { session: false }), GatesController.getById);
router.post('/', passport.authenticate('jwt', { session: false }), isAdmin(), createGateValidator, GatesController.create);
router.put('/:id', passport.authenticate('jwt', { session: false }), isAdmin(), updateGateValidator, GatesController.update);
router.delete('/:id', passport.authenticate('jwt', { session: false }), isAdmin(), GatesController.remove);

export default router;
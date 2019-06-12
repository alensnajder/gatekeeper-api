import express from 'express';
import passport from 'passport';
import * as GatesController from './gates.controller';
import { createGateValidator, updateGateValidator } from './gates.validator';

const router = express.Router();

router.get('/', passport.authenticate('jwt', { session: false }), GatesController.get);
router.get('/:id', passport.authenticate('jwt', { session: false }), GatesController.getById);
router.post('/', passport.authenticate('jwt', { session: false }), createGateValidator, GatesController.create);
router.put('/:id', passport.authenticate('jwt', { session: false }), updateGateValidator, GatesController.update);
router.delete('/:id', passport.authenticate('jwt', { session: false }), GatesController.remove);

export default router;
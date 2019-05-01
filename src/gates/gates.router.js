import express from 'express';
import passport from 'passport';
import * as GatesController from './gates.controller';

const router = express.Router();

router.get('/', passport.authenticate('jwt', { session: false }), GatesController.get);
router.get('/:id', passport.authenticate('jwt', { session: false }), GatesController.getById);
router.post('/', passport.authenticate('jwt', { session: false }), GatesController.create);
router.put('/:id', passport.authenticate('jwt', { session: false }), GatesController.update);
router.delete('/:id', passport.authenticate('jwt', { session: false }), GatesController.remove);

export default router;
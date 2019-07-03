import express from 'express';
import passport from 'passport';
import * as AuthController from './auth.controller';
import { getAccessTokenValidator } from './auth.validator';

const router = express.Router();

router.post('/', AuthController.getAccessToken);
router.delete('/', passport.authenticate('jwt', { session: false }), AuthController.revokeRefreshToken);

export default router;
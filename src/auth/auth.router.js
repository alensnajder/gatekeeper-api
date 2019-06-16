import express from 'express';
import * as AuthController from './auth.controller';
import { getAccessTokenValidator } from './auth.validator';

const router = express.Router();

router.post('/', AuthController.getAccessToken);

export default router;
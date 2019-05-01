import express from 'express';
import * as AuthController from './auth.controller';

const router = express.Router();

router.post('/', AuthController.getAccessToken);

export default router;
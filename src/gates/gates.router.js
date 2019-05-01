import express from 'express';
import * as GatesController from './gates.controller';

const router = express.Router();

router.post('/', GatesController.create);

export default router;
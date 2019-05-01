import express from 'express';
import * as RecordsController from './records.controller';

const router = express.Router();

router.post('/', RecordsController.create);

export default router;
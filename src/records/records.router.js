import express from 'express';
import * as RecordsController from './records.controller';

const router = express.Router();

router.get('/', RecordsController.get);
router.post('/', RecordsController.create);

export default router;
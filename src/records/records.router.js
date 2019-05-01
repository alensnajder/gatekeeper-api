import express from 'express';
import * as RecordsController from './records.controller';

const router = express.Router();

router.get('/', RecordsController.get);
router.get('/:id', RecordsController.getById);
router.post('/', RecordsController.create);
router.delete('/:id', RecordsController.remove);

export default router;
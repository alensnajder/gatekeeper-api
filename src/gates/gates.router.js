import express from 'express';
import * as GatesController from './gates.controller';

const router = express.Router();

router.get('/', GatesController.get);
router.get('/:id', GatesController.getById);
router.post('/', GatesController.create);
router.put('/:id', GatesController.update);
router.delete('/:id', GatesController.remove);

export default router;
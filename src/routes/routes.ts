import express from 'express';

import sayingController from '../controllers/saying.controller';

const router = express.Router();

router.post('/saying', sayingController.create);
router.get('/saying', sayingController.getAll);
router.get('/saying/:id', sayingController.getById);
router.put('/saying/:id', sayingController.update);
router.delete('/saying/:id', sayingController.delete);

// Special route for getting a random saying
router.get('/sayingrandom', sayingController.getRandom);

export default router;
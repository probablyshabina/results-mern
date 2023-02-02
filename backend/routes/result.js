import express from 'express';
import { getAllResults, addResult, getResult, updateResult, deleteResult } from '../controllers/results.js'

const router = express.Router();

router.route('/').get(getAllResults);
router.route('/add').post(addResult);
router.route('/:id').get(getResult);
router.route('/:id').patch(updateResult);
router.route('/:id').delete(deleteResult);

export default router;
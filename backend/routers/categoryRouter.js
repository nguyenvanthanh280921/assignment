import exprees from 'express';
import { create, list, read, remove, update, categoryById } from '../controllers/CategoryControllers';

const router = exprees.Router();

router.post('/category', create);
router.get('/category', list);
router.get('/category/:categoryId', read);
router.delete('/category/:categoryId', remove);
router.put('/category/:categoryId', update);
router.param('categoryId', categoryById);

module.exports = router;
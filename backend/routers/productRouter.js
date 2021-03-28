import exprees from 'express'
import { create, list, update, productById, read, remove } from '../controllers/productController';
// import { create, remove, update, post } from '../controllers/productController.js'

const router = exprees.Router();

// Thêm sản phẩm
router.post('/product', create);
router.get('/product', list);
router.put('/product/:productId', update);

router.get('/product/:productId', read);
router.delete('/product/:productId', remove);


router.param('productId', productById);



module.exports = router;
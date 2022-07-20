import { Router } from 'express';
import productController from '../controller/product';

const router = Router();

router.get('/', productController.raedProductsController);

router.post('/', productController.createProductController);

router.get('/:productId', productController.raedProductController);

router.patch('/:productId', productController.updateProductController);

router.delete('/:productId', productController.deleteProductController);

export default router;

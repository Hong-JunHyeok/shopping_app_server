import { Request, Response } from 'express';
import { v4 as uuidv4 } from 'uuid';
import products, { deleteById, getById, ProductType } from '../model/products';

const raedProductsController = (req: Request, res: Response) => res.json({
  products,
  code: 200,
  message: '상품 조회 성공',
});

const raedProductController = (req: Request, res: Response) => {
  const { productId } = req.params;
  const existProduct = getById(productId);

  if (!existProduct) {
    return res.json({
      message: '존재하지 않는 상품입니다.',
    });
  }

  res.json({
    product: existProduct,
    code: 200,
    message: '상품 조회에 성공하였습니다.',
  });
};

const createProductController = (req: Request, res: Response) => {
  const productMeta = req.body as ProductType;
  const generatedId = uuidv4();

  const newProduct: ProductType = {
    id: generatedId,
    ...productMeta,
  };

  setTimeout(() => {
    products.push(newProduct);

    return res.json({
      code: 200,
      message: '상품 등록에 성공하였습니다.',
      location: `/product?id=${generatedId}`,
    });
  }, 1000);
};

const updateProductController = (req: Request, res: Response) => {
  const { productId } = req.params;
  const updateProductData = req.body;

  const productIndex = products.findIndex((product) => product.id === productId);
  products[productIndex] = {
    ...products[productIndex],
    ...updateProductData,
  };

  return res.json({
    message: '상품 업데이트에 성공하였습니다.',
    location: `/product?id=${productId}`,
  });
};

const deleteProductController = (req: Request, res: Response) => {
  const { productId } = req.params;

  setTimeout(() => {
    deleteById(productId);

    return res.json({
      code: 200,
      message: '상품이 삭제되었습니다.',
    });
  }, 1000);
};

export default {
  raedProductsController,
  raedProductController,
  createProductController,
  updateProductController,
  deleteProductController,
};

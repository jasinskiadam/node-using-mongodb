import {
  addnewProduct,
  getProductWithID,
  getProducts,
  updateProduct,
  deleteProduct,
} from '../controllers/controllers';

const routes = (app) => {
  app
    .route('/products')
    .get(getProducts)

    //Post endpoint
    .post(addnewProduct);
  app.route('/products/:ProductID').get(getProductWithID).put(updateProduct).delete(deleteProduct);
};

export default routes;

import {
  addnewProduct,
  getProductWithID,
  getProducts,
} from '../controllers/controllers';

const routes = (app) => {
  app.route('/products')
    .get(getProducts)

    //Post endpoint
    .post(addnewProduct);
  app.route('/products/:ProductID').get(getProductWithID);
};

export default routes;

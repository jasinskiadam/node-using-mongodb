import { addnewProduct } from '../controllers/controller';

const routes = (app) => {
  app
    .route('/products')

    //Post endpoint
    .post(addnewProduct);
};

export default routes;

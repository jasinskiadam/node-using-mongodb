import mongoose from 'mongoose';
import { ProductSchema } from '../models/models';

const Product = mongoose.model('Product', ProductSchema);

export const addnewProduct = (req, res) => {
  let newProduct = new Product(req.body);

  newProduct.save((er, Product) => {
    if (er) {
      res.send(er);
    }
    res.json(Product);
  });
};

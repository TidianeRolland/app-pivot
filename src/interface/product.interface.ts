import { DBTable } from './db_table.interface';

export interface Product {
  id_product: number;
  product_name: string;
  price: number;
  rate: number;
}

// create Table Product

export const Product_Table: DBTable<Product> = {
  table_name: 'product',
  data: [
    {
      id_product: 1,
      product_name: 'iPhone',
      price: 1000,
      rate: 4.5,
    },
    {
      id_product: 2,
      product_name: 'iPad',
      price: 500,
      rate: 4.5,
    },
    {
      id_product: 3,
      product_name: 'MacBook',
      price: 2000,
      rate: 4.5,
    },
    {
      id_product: 4,
      product_name: 'Apple Watch',
      price: 500,
      rate: 4.5,
    },
    {
      id_product: 5,
      product_name: 'AirPods',
      price: 300,
      rate: 4.5,
    },
  ],
  columns: [
    {
      key: 'id_product',
      name: 'ProductId',
      type: 'number',
      visible: true,
      table_name: 'product',
    },
    {
      key: 'product_name',
      name: 'Product Name',
      type: 'string',
      visible: true,
      table_name: 'product',
    },
    {
      key: 'price',
      name: 'Price',
      type: 'number',
      visible: true,
      table_name: 'product',
    },
    {
      key: 'rate',
      name: 'Rate',
      type: 'number',
      visible: true,
      table_name: 'product',
    },
  ],
  foreign_keys: null,
};

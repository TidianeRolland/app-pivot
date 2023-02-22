import { DBTable } from './db_table.interface';

export interface Sale {
  id_sale: number;
  location: string;
  sale_date: string;
  product_id: number;
  seller_id: number;
}

const mapStrangerKey = new Map<string, string>();
mapStrangerKey.set('product_sale', 'product_id');
mapStrangerKey.set('seller_sale', 'seller_id');

export const Sale_Table: DBTable<Sale> = {
  table_name: 'sale',
  data: [
    {
      id_sale: 1,
      location: 'New York',
      sale_date: '2019-01-01',
      product_id: 1,
      seller_id: 1,
    },
    {
      id_sale: 2,
      location: 'Los Angeles',
      sale_date: '2019-01-02',
      product_id: 2,
      seller_id: 2,
    },
    {
      id_sale: 3,
      location: 'Chicago',
      sale_date: '2019-01-03',
      product_id: 3,
      seller_id: 3,
    },
    {
      id_sale: 4,
      location: 'Houston',
      sale_date: '2019-01-04',
      product_id: 4,
      seller_id: 4,
    },
    {
      id_sale: 5,
      location: 'Philadelphia',
      sale_date: '2019-01-05',
      product_id: 5,
      seller_id: 5,
    },
    // add more sales
    {
      id_sale: 6,
      location: 'New York',
      sale_date: '2019-01-06',
      product_id: 1,
      seller_id: 1,
    },
    {
      id_sale: 7,
      location: 'Los Angeles',
      sale_date: '2019-01-07',
      product_id: 2,
      seller_id: 2,
    },
    {
      id_sale: 8,
      location: 'Chicago',
      sale_date: '2019-01-08',
      product_id: 3,
      seller_id: 3,
    },
    {
      id_sale: 9,
      location: 'Houston',
      sale_date: '2019-01-09',
      product_id: 4,
      seller_id: 4,
    },
    {
      id_sale: 10,
      location: 'Philadelphia',
      sale_date: '2019-01-10',
      product_id: 5,
      seller_id: 5,
    },
    {
      id_sale: 11,
      location: 'New York',
      sale_date: '2019-01-11',
      product_id: 1,
      seller_id: 1,
    },
    {
      id_sale: 12,
      location: 'Los Angeles',
      sale_date: '2019-01-12',
      product_id: 2,
      seller_id: 2,
    },
    {
      id_sale: 13,
      location: 'Chicago',
      sale_date: '2019-01-13',
      product_id: 3,
      seller_id: 3,
    },
    {
      id_sale: 14,
      location: 'Houston',
      sale_date: '2019-01-14',
      product_id: 4,
      seller_id: 4,
    },
    {
      id_sale: 15,
      location: 'Philadelphia',
      sale_date: '2019-01-15',
      product_id: 5,
      seller_id: 5,
    },
    {
      id_sale: 16,
      location: 'New York',
      sale_date: '2019-01-16',
      product_id: 1,
      seller_id: 1,
    },
    {
      id_sale: 17,
      location: 'Los Angeles',
      sale_date: '2019-01-17',
      product_id: 2,
      seller_id: 2,
    },
    {
      id_sale: 18,
      location: 'Chicago',
      sale_date: '2019-01-18',
      product_id: 3,
      seller_id: 3,
    },
    {
      id_sale: 19,
      location: 'Houston',
      sale_date: '2019-01-19',
      product_id: 4,
      seller_id: 4,
    },
    {
      id_sale: 20,
      location: 'Philadelphia',
      sale_date: '2019-01-20',
      product_id: 5,
      seller_id: 5,
    },
    {
      id_sale: 21,
      location: 'New York',
      sale_date: '2019-01-21',
      product_id: 1,
      seller_id: 1,
    },
    {
      id_sale: 22,
      location: 'Los Angeles',
      sale_date: '2019-01-22',
      product_id: 2,
      seller_id: 2,
    },
    {
      id_sale: 23,
      location: 'Chicago',
      sale_date: '2019-01-23',
      product_id: 3,
      seller_id: 3,
    },
    {
      id_sale: 24,
      location: 'Houston',
      sale_date: '2019-01-24',
      product_id: 4,
      seller_id: 4,
    },
    {
      id_sale: 25,
      location: 'Philadelphia',
      sale_date: '2019-01-25',
      product_id: 5,
      seller_id: 5,
    },
    {
      id_sale: 26,
      location: 'New York',
      sale_date: '2019-01-26',
      product_id: 1,
      seller_id: 1,
    },
    {
      id_sale: 27,
      location: 'Los Angeles',
      sale_date: '2019-01-27',
      product_id: 2,
      seller_id: 2,
    },
    {
      id_sale: 28,
      location: 'Chicago',
      sale_date: '2019-01-28',
      product_id: 3,
      seller_id: 3,
    },
    {
      id_sale: 29,
      location: 'Houston',
      sale_date: '2019-01-29',
      product_id: 4,
      seller_id: 4,
    },
    {
      id_sale: 30,
      location: 'Philadelphia',
      sale_date: '2019-01-30',
      product_id: 5,
      seller_id: 5,
    },
    {
      id_sale: 31,
      location: 'New York',
      sale_date: '2019-01-31',
      product_id: 1,
      seller_id: 1,
    },
  ],
  columns: [
    {
      key: 'id_sale',
      name: 'SaleId',
      type: 'number',
      visible: true,
      table_name: 'sale',
    },
    {
      key: 'location',
      name: 'Location',
      type: 'string',
      visible: true,
      table_name: 'sale',
    },
    {
      key: 'sale_date',
      name: 'SaleDate',
      type: 'date',
      visible: true,
      table_name: 'sale',
    },
    {
      key: 'product_id',
      name: 'ProductId',
      type: 'number',
      visible: false,
      table_name: 'sale',
    },
    {
      key: 'seller_id',
      name: 'SellerId',
      type: 'number',
      visible: false,
      table_name: 'sale',
    },
  ],
  foreign_keys: [
    {
      foreign_key: 'product_id',
      foreign_table_id: 'id_product',
      foreign_table_name: 'product',
    },
    {
      foreign_key: 'seller_id',
      foreign_table_id: 'id_seller',
      foreign_table_name: 'seller',
    },
  ],
};

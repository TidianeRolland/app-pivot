import { DBTable } from './db_table.interface';

export interface Seller {
  id_seller: number;
  name: string;
  email: string;
  phone: string;
  address: string;
}

export const Seller_Table: DBTable<Seller> = {
  table_name: 'seller',
  data: [
    {
      id_seller: 1,
      name: 'John',
      email: 'john@adservio.fr',
      phone: '0123456789',
      address: '1 rue de la paix',
    },
    {
      id_seller: 2,
      name: 'Jane',
      email: 'jane@adservio',
      phone: '0123456789',
      address: '1 rue de la paix',
    },
    {
      id_seller: 3,
      name: 'Jack',
      email: 'jack@adservio',
      phone: '0123456789',
      address: '1 rue de la paix',
    },
    {
      id_seller: 4,
      name: 'Jill',
      email: 'jill@adservio',
      phone: '0123456789',
      address: '2 rue de la paix',
    },
    {
      id_seller: 5,
      name: 'Joe',
      email: 'joe@adservio',
      phone: '0123456789',
      address: '1 rue de la paix',
    },
  ],
  columns: [
    {
      key: 'id_seller',
      name: 'SellerId',
      type: 'number',
      visible: true,
      table_name: 'seller',
    },
    {
      key: 'name',
      name: 'Name',
      type: 'string',
      visible: true,
      table_name: 'seller',
    },
    {
      key: 'email',
      name: 'Email',
      type: 'string',
      visible: true,
      table_name: 'seller',
    },
    {
      key: 'phone',
      name: 'Phone',
      type: 'string',
      visible: true,
      table_name: 'seller',
    },
    {
      key: 'address',
      name: 'Address',
      type: 'string',
      visible: true,
      table_name: 'seller',
    },
  ],
  foreign_keys: null,
};

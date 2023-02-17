import { DBTable, ForeignKeyRelation } from 'src/interface/db_table.interface';
import { Product_Table } from 'src/interface/product.interface';
import { Sale_Table } from 'src/interface/sale.interface';
import { Seller_Table } from 'src/interface/seller.interface';

export function mergeAllTables(
  pivotTable: DBTable<any>,
  dbTables: DBTable<any>[]
): DBTable<any> | null {
  let result = pivotTable;
  if (!result.foreign_keys) return null;

  let foreign_keys = result.foreign_keys;

  while (foreign_keys.length > 0) {
    const selectedForeignKey = foreign_keys.shift();
    if (!selectedForeignKey) break;

    const table = dbTables.find(
      (table) => table.table_name === selectedForeignKey.foreign_table_name
    );
    if (!table) break;
    // merge the table
    const mergedResult = mergeTable(result, table, selectedForeignKey);
    if (!mergedResult) continue;

    result = mergedResult.table;
    if (mergedResult.foreign_key)
      foreign_keys = foreign_keys.concat(mergedResult.foreign_key);
  }

  return result;
}

export function mergeTable(
  table1: DBTable<any>,
  table2: DBTable<any>,
  foreignKey: ForeignKeyRelation
): { table: DBTable<any>; foreign_key: ForeignKeyRelation[] | null } | null {
  const newTable: DBTable<any> = {
    table_name: table1.table_name + '_' + table2.table_name,
    data: [],
    columns: [],
    foreign_keys: [],
  };

  // merge columns
  newTable.columns = table1.columns.concat(table2.columns);

  // check table1 and table2 have foreign key not null and merge them
  newTable.foreign_keys = null;
  if (table1.foreign_keys && table2.foreign_keys) {
    newTable.foreign_keys = table1.foreign_keys.concat(table2.foreign_keys);
  } else if (table1.foreign_keys) {
    newTable.foreign_keys = table1.foreign_keys;
  } else if (table2.foreign_keys) {
    newTable.foreign_keys = table2.foreign_keys;
  }

  // for each row in table1, find all rows in table2 that match the foreign key
  // then merge the two rows into one row. One row is an object with key-value pairs

  const foreign_key1 = foreignKey.foreign_key;
  const foreign_key2 = foreignKey.foreign_table_id;

  for (let i = 0; i < table1.data.length; i++) {
    const row1 = table1.data[i];
    const row1Value = row1[foreign_key1];
    const row2s = table2.data.filter(
      (row2) => row2[foreign_key2] === row1Value
    );
    for (let j = 0; j < row2s.length; j++) {
      const row2 = row2s[j];
      const newRow = { ...row1, ...row2 };
      newTable.data.push(newRow);
    }
  }

  return { table: newTable, foreign_key: table2.foreign_keys };
}

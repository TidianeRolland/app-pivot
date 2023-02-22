import { Component, OnInit } from '@angular/core';
import { DBColumn, DBTable } from 'src/interface/db_table.interface';
import { Product_Table } from 'src/interface/product.interface';
import { Sale_Table } from 'src/interface/sale.interface';
import { Seller_Table } from 'src/interface/seller.interface';
import { mergeAllTables } from './utils/table.functions';

const allTables: DBTable<any>[] = [Product_Table, Seller_Table, Sale_Table];

const dbTables: DBTable<any>[] = [Product_Table, Seller_Table];
const pivotTable = Sale_Table;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'app-pivot';

  selectedCols: DBColumn[] = [];
  sortColsFunctions: Function[] = [];

  allDBColumns: DBColumn[] = [];

  items: any[] = [];

  dataTable: DBTable<any> | null = null;

  ngOnInit() {
    this.dataTable = mergeAllTables(pivotTable, dbTables);
    this.allDBColumns =
      this.dataTable?.columns.filter((col) => col.visible) || [];
    this.onColumnChanged(null);
  }

  getTableFromSelectedColumns(): any[] {
    if (this.selectedCols.length === 0) return [];
    const table_names = this.selectedCols.map((c) => c.table_name);
    // create unique table names using a set
    const unique_table_names = [...new Set(table_names)];
    if (unique_table_names.length > 1) {
      return this.dataTable?.data as any[];
    } else {
      // find in dbTables the table with the name
      const table = allTables.find(
        (t) => t.table_name === unique_table_names[0]
      );
      return table?.data as any[];
    }
  }

  onColumnChanged(event: any) {
    const table = this.getTableFromSelectedColumns();
    // console.log('table', table);

    // filter items to show only unique items regarding the selected columns
    const filteredItems = table.filter((item, index, self) => {
      return (
        index ===
        self.findIndex((t) => {
          return this.selectedCols.every((col) => {
            return t[col.key] === item[col.key];
          });
        })
      );
    });

    // console.log('filteredItems', filteredItems);

    // create array of sorted functions
    this.sortColsFunctions = this.selectedCols.map((col) => {
      return (a: any, b: any): number => {
        if (col.type === 'number') {
          return a[col.key] - b[col.key];
        } else if (col.type === 'date') {
          return (
            new Date(a[col.key]).getTime() - new Date(b[col.key]).getTime()
          );
        } else {
          return a[col.key].localeCompare(b[col.key]);
        }
      };
    });

    // sort items
    let sortedItems = [];
    if (this.sortColsFunctions.length > 0) {
      for (let i = 0; i < this.sortColsFunctions.length; i++) {
        const sortFn = this.sortColsFunctions[i] as (a: any, b: any) => number;
        sortedItems = filteredItems.sort(sortFn) || [];
      }
    }

    // console.log('sortedItems', sortedItems);

    this.items = sortedItems;
  }
}

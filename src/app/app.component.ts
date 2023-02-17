import { Component, OnInit } from '@angular/core';
import { DBColumn, DBTable } from 'src/interface/db_table.interface';
import { Product_Table } from 'src/interface/product.interface';
import { Sale_Table } from 'src/interface/sale.interface';
import { Seller_Table } from 'src/interface/seller.interface';
import { mergeAllTables } from './utils/table.functions';

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

  cols: any[] = [];

  items: any[] = [];

  dataTable: DBTable<any> | null = null;

  ngOnInit() {
    this.dataTable = mergeAllTables(pivotTable, dbTables);
    console.log(this.dataTable);
    this.allDBColumns =
      this.dataTable?.columns.filter((col) => col.visible) || [];
    // this.cols = this.dataTable?.columns.map(col => ({ field: col.key, header: col.name })) || [];
    this.cols = this.selectedCols;
    this.onColumnChanged(null);
  }

  onColumnChanged(event: any) {
    console.log(this.selectedCols);
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

    let sortedItems = [];
    if (this.sortColsFunctions.length > 0) {
      for (let i = 0; i < this.sortColsFunctions.length; i++) {
        const sortFn = this.sortColsFunctions[i] as (a: any, b: any) => number;
        sortedItems = this.dataTable?.data.sort(sortFn) || [];
      }
    }

    this.items = sortedItems;

    console.log(this.items);
  }
}

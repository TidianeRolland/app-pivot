import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { TableModule } from 'primeng/table';
import { ListboxModule } from 'primeng/listbox';
import { PickListModule } from 'primeng/picklist';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    TableModule,
    ListboxModule,
    FormsModule,
    BrowserAnimationsModule,
    PickListModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

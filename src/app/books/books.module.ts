import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListBooksComponent } from './list-books/list-books.component';
import { ViewBookComponent } from './view-book/view-book.component';
import { AddBookComponent } from './add-book/add-book.component';
import { EditBookComponent } from './edit-book/edit-book.component';
import { DeleteBookComponent } from './delete-book/delete-book.component';
import {MatListModule} from "@angular/material/list";
import {RouterModule} from "@angular/router";
import {MatCardModule} from '@angular/material/card';


@NgModule({
  declarations: [
    ListBooksComponent,
    ViewBookComponent,
    AddBookComponent,
    EditBookComponent,
    DeleteBookComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    MatListModule,
    MatCardModule
  ]
})
export class BooksModule { }

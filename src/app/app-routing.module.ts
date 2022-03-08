import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddBookComponent } from './books/add-book/add-book.component';
import { DeleteBookComponent } from './books/delete-book/delete-book.component';
import { EditBookComponent } from './books/edit-book/edit-book.component';
import { ListBooksComponent } from './books/list-books/list-books.component';
import { ViewBookComponent } from './books/view-book/view-book.component';

const routes: Routes = [
  { path: 'books', children:[
      { path: '', component: ListBooksComponent},
      { path: 'list', component: ListBooksComponent},
      { path: 'delete/:id', component: DeleteBookComponent},
      { path: 'edit/:id', component: EditBookComponent},
      { path: 'view/:id', component: ViewBookComponent},
      { path: 'create', component: AddBookComponent}
    ]}
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }

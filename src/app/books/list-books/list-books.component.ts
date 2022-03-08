import { Component, OnInit } from '@angular/core';
import {BookService} from "../../services/book.service";

@Component({
  selector: 'app-list-books',
  templateUrl: './list-books.component.html',
  styleUrls: ['./list-books.component.css']
})
export class ListBooksComponent implements OnInit {

  listBooks: any;

  constructor(private bookService: BookService) {
  }

  ngOnInit(): void {
    this.bookService.lisBooks().subscribe(data => {
      this.listBooks = data;
    })
  }
}

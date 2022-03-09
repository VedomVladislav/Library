import { Component, OnInit } from '@angular/core';
import {BookService} from "../../services/book.service";
import {ActivatedRoute} from "@angular/router";


@Component({
  selector: 'app-view-book',
  templateUrl: './view-book.component.html',
  styleUrls: ['./view-book.component.css']
})
export class ViewBookComponent implements OnInit {

  bookId: number = 0;
  bookDetails: any;

  constructor(private bookService: BookService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {

  this.activatedRoute.params.subscribe(data => {
    this.bookId = data['id'];
    console.log(this.bookId)
  }
  )

    this.bookService.viewBook(this.bookId).subscribe(data => {
      console.log("It`s data: " + data)
      this.bookDetails = data;
    })
  }

}

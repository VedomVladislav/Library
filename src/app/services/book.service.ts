import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  baseUrl: string = 'http://10.92.92.22:8082/'

  constructor(private http: HttpClient) { }

  listBooks(){
    return this.http.get(this.baseUrl + 'library/books');
  }

  viewBook(id: number) {
    return this.http.get(this.baseUrl + 'library/books/' + id);
  }

}

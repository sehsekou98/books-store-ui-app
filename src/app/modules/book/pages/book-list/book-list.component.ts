import { Component, OnInit } from '@angular/core';
import { borrowBook } from '../../../../services/fn/book/borrow-book';
import { BookService } from '../../../../services/services';
import { Router } from '@angular/router';
import { findAllBooks } from '../../../../services/fn/book/find-all-books';
import { PageResponseBookResponse } from '../../../../services/models';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrl: './book-list.component.scss'
})
export class BookListComponent implements OnInit {
  bookResponse: PageResponseBookResponse = {};
  page = 0;
  size = 5;

  constructor(
    private bookService: BookService,
    private router: Router
  ) { }


  ngOnInit(): void {
    this.findAllBooks();
  }
  private findAllBooks(): void {
    this.bookService.findAllBooks({
      page: this.page,
      size: this.size
    }).subscribe({
      next: (books) => {
        this.bookResponse = books;
      }
    })
  }

}

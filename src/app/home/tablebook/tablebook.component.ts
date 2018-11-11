import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms'
import { UserService } from '../../shared/user.service';
import { Router } from '@angular/router';
import { Book } from '../../shared/book.model';

@Component({
  selector: 'app-tablebook',
  templateUrl: './tablebook.component.html',
  styleUrls: ['./tablebook.component.css']
})
export class TablebookComponent implements OnInit {
  books: any;

  constructor(private userService: UserService,
    private router : Router) { }

  ngOnInit() {
    this.userService.getBooks().subscribe((data : any) =>{
      this.books = data.data.books;
      console.log(this.books);
    });
  }

  showForEdit(book: Book) {
    this.router.navigate(['/edit', book.id]);
  }

  onDelete(idb) {
    console.log(idb);
    this.userService.deleteBook(idb)
  }
}

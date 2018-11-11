import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms'
import { UserService } from '../../shared/user.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { Book } from '../../shared/book.model';

@Component({
  selector: 'app-insertbook',
  templateUrl: './insertbook.component.html',
  styleUrls: ['./insertbook.component.css']
})
export class InsertbookComponent implements OnInit {

  id : any;
  book:Book;
  constructor(private userService: UserService,  private router : Router, private activeRoute : ActivatedRoute) { }
  books: Book;
  ngOnInit() {
    this.resetForm();
    
  }

  resetForm(form?: NgForm) {
    if (form != null)
      form.reset();
      this.userService.selectedBook = {
      id: null,
      name: '',
      description: ''
    }
  }

  onSubmit(form){
    if(form.value.id == null){
      this.userService.postBook(form.value).subscribe((data : any) =>{
        this.books = data.description;
        this.router.navigate(['/home']);
        //console.log(this.books);
      })
    }else{
      
    }

  }


}

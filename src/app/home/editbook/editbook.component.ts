import { Component, OnInit } from '@angular/core';
import { UserService } from '../../shared/user.service';
import { NgForm } from '@angular/forms'
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-editbook',
  templateUrl: './editbook.component.html',
  styleUrls: ['./editbook.component.css']
})
export class EditbookComponent implements OnInit {

  id:any;
  book = {};
  constructor(private userService: UserService, private router : Router, private activeRoute : ActivatedRoute) { }

  ngOnInit() {
    this.activeRoute.params.subscribe(params => this.id = params.term);
    console.log(this.id);
    
    this.userService.detailBook(this.id).subscribe((data : any) => {
      this.book = data.data;
      console.log(data.data);
    })
  }

  editBook(data){
    this.userService.putBook(data).subscribe((data : any) => {
      this.router.navigate(['/home']);
      
    })
  }
}

import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { Post } from '../post';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-post-form',
  imports: [CommonModule,FormsModule,RouterModule],
  templateUrl: './post-form.component.html',
  styleUrl: './post-form.component.css'
})
export class PostFormComponent {
  data:Post={}
  errMessage:any={}
  constructor(private apiService:ApiService,private router:Router){}
  addPost():void{
    this.apiService.createPost(this.data).subscribe({
      next:res=>console.log("posted"),
      error:err=>this.errMessage=err
    })
  }
}

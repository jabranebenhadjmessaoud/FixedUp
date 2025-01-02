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
  user_id : any| null=null
  selectedFile: File | null = null;

  ngOnInit():void{
    this.user_id=localStorage.getItem("user_id")
  }
  constructor(private apiService:ApiService,private router:Router){}
  
  onFileSelected(event: any): void {
    this.selectedFile = event.target.files[0];
  }

  addPost():void{
    this.data={...this.data,worker:this.user_id,img:this.selectedFile?.name}
    this.apiService.createPost(this.data).subscribe({
      next:res=>{
        if (this.selectedFile) {
          this.apiService.uploadImage(this.selectedFile).subscribe({
            next: res => console.log("Image uploaded"),
            error: err => this.errMessage = err
          });
        }
        this.router.navigate(['/workerprofile/'+this.user_id])
      },
      error:err=>this.errMessage=err
    })
  }
}   

import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { User } from '../user';
import { ApiService } from '../api.service';
import { Router, RouterModule } from '@angular/router';
@Component({
  selector: 'app-login',
  imports: [CommonModule,FormsModule,RouterModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  data:User={}
  errMessage:any={}
  constructor(private apiService:ApiService,private router:Router){}
  login():void{
    this.apiService.login(this.data).subscribe({
      next:(res)=>console.log("logIn"),
      error:err=>this.errMessage=err
    })
  }
  
}

import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';
import { User } from '../user';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-register',
  imports: [CommonModule,FormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  data:User={}
    errMessage:any={}
    constructor(private apiService:ApiService,private router:Router){}
    register():void{
      if (this.data.acctype=='client'){
      this.apiService.clientRegister(this.data).subscribe({
        next:(res)=>console.log("register"),
        error:err=>this.errMessage=err
      })
    }else{
      this.apiService.WorkerRegister(this.data).subscribe({
        next:(res)=>console.log("regustered worker"),
        error:err=>this.errMessage=err
      })
    }
    }
}

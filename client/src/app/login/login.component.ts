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
    let verif:boolean=false
    this.apiService.login(this.data).subscribe({
      next:(res)=>{
        console.log("logIn")
        localStorage.setItem('token', res.token);
        localStorage.setItem('user_id', res.client.id);
        localStorage.setItem('acctype', res.client.acctype);
        // console.log(res)
        verif=true
        console.log(verif)
        if(localStorage.getItem('acctype')=='Client'){
          this.router.navigate(['/categories'])
        }
      },
      error:err=>this.errMessage=err
    })
    if(!verif){
      console.log(verif)
      this.apiService.workerLogin(this.data).subscribe({
        next:(res)=>{
          localStorage.setItem('token',res.token)
          localStorage.setItem('user_id',res.worker.id)
          localStorage.setItem('acctype',res.worker.acctype)
          console.log(localStorage.getItem("acctype"))
          console.log("worker login")
          console.log(res)
          this.router.navigate(['/workerprofile/'+localStorage.getItem('user_id')])
        },
        error:err=>this.errMessage=err
      })
    }
  }
  
}

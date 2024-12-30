import { Component } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { ApiService } from '../api.service';
import { User } from '../user';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-register',
  imports: [CommonModule,FormsModule,RouterModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  data:User={}
    errMessage:any={}
    constructor(private apiService:ApiService,private router:Router){}
    register():void{
      if (this.data.acctype=='Client'){
      this.apiService.clientRegister(this.data).subscribe({
        next:(res)=>this.router.navigate(['/login']),
        error:err=>this.errMessage=err
      })
    }else{
      this.apiService.WorkerRegister(this.data).subscribe({
        next:(res)=>this.router.navigate(['/login']),
        error:err=>this.errMessage=err
      })
    }
    }
}

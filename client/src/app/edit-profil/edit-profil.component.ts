import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { User } from '../user';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-edit-profil',
  imports: [CommonModule,FormsModule,RouterModule],
  templateUrl: './edit-profil.component.html',
  styleUrl: './edit-profil.component.css' 
})
export class EditProfilComponent {
  data:User={}
  errMessage:any={}
  acctype:string|null=null
  user_id:string|null=null

  constructor(private apiService:ApiService,private router:Router,private route:ActivatedRoute){}


  ngOnInit():void{
    this.acctype=localStorage.getItem("acctype")
    this.user_id=localStorage.getItem("user_id")
    if(this.user_id){
      if(this.acctype=="Worker"){
        this.apiService.getoneworker(this.user_id).subscribe({
          next:res=>this.data=res,
          error:err=>console.error("Error fetching item : ",err)
        })
      }else{
        this.apiService.getOneClient(this.user_id).subscribe({
          next:res=>this.data=res,
          error:err=>console.error("Error fetching item : ",err)
        })
      }
    }
  }
  updateProfile():void{
    if(this.acctype=="client"){
      this.apiService.UpdateClient(this.data).subscribe({
        next:res=>console.log("updated client"),
        error:err=>this.errMessage=err
      })
    }else{
      this.apiService.UpdateWorker(this.data).subscribe({
        next:res=>console.log("updated worker"),
        error:err=>this.errMessage=err
      })
    }
  }

}

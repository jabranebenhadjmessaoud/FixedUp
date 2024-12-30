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
    if(this.acctype=="Client"){
      const data2={_id:this.data._id,firstName:this.data.firstName,lastName:this.data.lastName,phone:this.data.phone,email:this.data.email,address:this.data.address}
      this.apiService.UpdateClient(data2).subscribe({
        next:res=>console.log("updated client"),
        error:err=>this.errMessage=err
      })
    }
    else{
      const data2={_id:this.data._id,firstName:this.data.firstName,lastName:this.data.lastName,phone:this.data.phone,email:this.data.email,address:this.data.address,category:this.data.category,description:this.data.description,skills:this.data.skills}
      this.apiService.UpdateWorker(data2).subscribe({
        next:res=>console.log("updated worker"),
        error:err=>this.errMessage=err
      })
    }
  }

}

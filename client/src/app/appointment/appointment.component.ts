import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { Appointment } from '../appointment';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-appointment',
  imports: [CommonModule,FormsModule,RouterModule],
  templateUrl: './appointment.component.html',
  styleUrl: './appointment.component.css'
})
export class AppointmentComponent {
  data:Appointment={}
  errMessage:any={}
  client_id : any| null=null
  worker_id:any|null=null

  ngOnInit():void{
    this.client_id=localStorage.getItem("user_id")
    this.worker_id = this.route.snapshot.paramMap.get('id')
  }
    constructor(private apiService:ApiService,private router:Router ,private route:ActivatedRoute){}

  addAppointment():void{
    this.data={...this.data,client:this.client_id,worker:this.worker_id}
    this.apiService.createAppointment(this.data).subscribe({
      next:res=>{console.log("appointment");
        this.router.navigate(['/categories']);  
      },
      error:err=>this.errMessage=err
    })
  }
}

import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatCardModule } from "@angular/material/card";
import { ApiService } from '../api.service';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { User } from '../user';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-worker-profile',
  imports: [CommonModule,MatCardModule,RouterModule,FormsModule],
  templateUrl: './worker-profile.component.html',
  styleUrl: './worker-profile.component.css'
})
export class WorkerProfileComponent {

  workerdetails: User = {}
  client_id:string|null=null
  rate:number=0
  workerid:string|null=null
  alljobs:any 
  workerjobs:any
  errMessage:any

  constructor(private apiService: ApiService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.workerid = this.route.snapshot.paramMap.get('id')
    
    this.client_id=localStorage.getItem("user_id")
    if (this.workerid) {
      this.apiService.getoneworker(this.workerid).subscribe({
        next: data => {this.workerdetails = data;
                      console.log(this.workerdetails);},
        error: err => console.error("Error fetching item:", err)
      })
    }
    if (this.workerid) {
      this.apiService.getJobByWorker(this.workerid).subscribe({
        next: data => {this.alljobs = data;
          console.log("all jobs list");
                      console.log(this.alljobs)
                      // this.workerjobs=this.alljobs.filter((job: string | any[]) => job. > 6)
                      ;;},
        error: err => console.error("Error fetching item:", err)
      })
    }

  }

  rating():void{
    console.log("from rating",this.rate)
    console.log("*****",this.workerid)
    const data:object={worker:this.workerid,client:this.client_id,rate:this.rate}
    console.log(data)
    this.apiService.addRate(data).subscribe({
      next:data=>console.log("rated"),
      error:err=>this.errMessage=err
    })
  }

}

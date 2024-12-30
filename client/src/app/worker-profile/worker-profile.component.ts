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
  data:any
  workerid:string|null=null
  alljobs:any 
  workerjobs:any
  joiningdate:any
  constructor(private apiService: ApiService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.workerid = this.route.snapshot.paramMap.get('id')
    this.client_id=localStorage.getItem("user_id")
    if (this.workerid) {
      this.apiService.getoneworker(this.workerid).subscribe({
        next: data => {this.workerdetails = data;
                      this.joiningdate=data.createdAt;
                      this.joiningdate=this.joiningdate.slice(0,10)
                      console.log("*******************************");
                      console.log(this.joiningdate);

                      console.log(this.workerdetails);},
        error: err => console.error("Error fetching item:", err)
      })
    }
    if (this.workerid) {
      this.apiService.getalljobs().subscribe({
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
    this.data={...this.data,worker:this.workerid,client:this.client_id}
    this.apiService.addRate(this.data).subscribe({
      next:data=>console.log("rated"),
      error:err=>console.error(err)
    })
  }

}

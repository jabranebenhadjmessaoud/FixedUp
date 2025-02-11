import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatCardModule } from "@angular/material/card";
import { ApiService } from '../api.service';
import { ActivatedRoute,Router, RouterModule } from '@angular/router';
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
  acctype:any
  rate:number=0
  workerid:string|null=null
  alljobs:any 
  workerjobs:any
  joiningdate:any
  rates:any
  final:any
  count:number=0
  constructor(private apiService: ApiService,private router:Router, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.workerid = this.route.snapshot.paramMap.get('id')
    
    this.client_id=localStorage.getItem("user_id")
    this.acctype=localStorage.getItem("acctype")
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
      this.apiService.getJobByWorker(this.workerid).subscribe({
        next: data => {this.alljobs = data;
          console.log("all jobs list");
                      console.log(this.alljobs)
                      // this.workerjobs=this.alljobs.filter((job: string | any[]) => job. > 6)
                      ;;},
        error: err => console.error("Error fetching item:", err)
      })
    }
    if (this.workerid) {
      this.apiService.getRateByWorker(this.workerid).subscribe({
        next: data => {this.rates = data;
          console.log("all rates list");
                      console.log(this.rates);
                      for(let obj of this.rates){
                        this.count+=obj.rate
                      }
                      console.log(this.count);
                      this.final=this.count/this.rates.length;
                      console.log(this.final);


          },
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
      next:data=>{console.log("rated");
        window.location.reload()
        // this.router.navigateByUrl('/workerprofile/'+this.workerid);
      },
      error:err=>console.log(err)
    })
  }

}

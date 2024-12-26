import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatCardModule } from "@angular/material/card";
import { ApiService } from '../api.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-worker-profile',
  imports: [CommonModule,MatCardModule],
  templateUrl: './worker-profile.component.html',
  styleUrl: './worker-profile.component.css'
})
export class WorkerProfileComponent {

  workerdetails: any = {}

  constructor(private apiService: ApiService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    const workerid = this.route.snapshot.paramMap.get('id')
    if (workerid) {
      this.apiService.getoneworker(workerid).subscribe({
        next: data => {this.workerdetails = data;
                      console.log(this.workerdetails);},
        error: err => console.error("Error fetching item:", err)
      })
    }
  }

}

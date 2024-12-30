import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ApiService } from '../api.service';
import { ActivatedRoute, RouterModule } from '@angular/router';

@Component({
  selector: 'app-admin-dashboard',
  imports: [CommonModule,RouterModule],
  templateUrl: './admin-dashboard.component.html',
  styleUrl: './admin-dashboard.component.css'
})
export class AdminDashboardComponent {

  workerslist: any[] = []
  clientslist:any[]=[]
  allrates:any
  workerid:any
  rates:any
  final:any
  count:number=0
  constructor(private apiService: ApiService) {}
  ngOnInit(): void {
    this.apiService.getallworkers().subscribe({
      next: data =>{ this.workerslist = data ;
      },
      error: err => console.error("Error fetching item:", err)
    });
    this.apiService.getallclients().subscribe({
      next: data =>{ this.clientslist = data ;
      },
      error: err => console.error("Error fetching item:", err)
    });
  }
  deleteworker(id?:string): void {
    this.apiService.deleteworker(id!).subscribe({
      next: () => {this.workerslist = this.workerslist.filter(i => i._id !== id);
        console.log("deleting worker");},
      error: (err) => console.error(err)
    })
  }
  deleteclient(id?:string): void {
    this.apiService.deleteclient(id!).subscribe({
      next: () =>{ this.clientslist = this.clientslist.filter(i => i._id !== id) ;
          console.log("deleting client");
      },
      error: (err) => console.error(err)
    })
  }
}
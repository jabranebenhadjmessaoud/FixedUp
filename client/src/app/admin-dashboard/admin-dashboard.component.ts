import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-admin-dashboard',
  imports: [CommonModule],
  templateUrl: './admin-dashboard.component.html',
  styleUrl: './admin-dashboard.component.css'
})
export class AdminDashboardComponent {

  workerslist: any[] = []
  clientslist:any[]=[]
  
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

}
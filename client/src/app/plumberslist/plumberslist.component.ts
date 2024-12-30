import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ApiService } from '../api.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-plumberslist',
  imports: [CommonModule,RouterModule],
  templateUrl: './plumberslist.component.html',
  styleUrl: './plumberslist.component.css'
})
export class PlumberslistComponent {
  workerslist: any[] = []
  plumberslist:any[]=[]

  constructor(private apiService: ApiService) {}
  ngOnInit(): void {
    this.apiService.getallworkers().subscribe({
      next: data =>{ this.workerslist = data ;
        this.plumberslist=this.workerslist.filter(aa => aa.category==="plumbers")
      },
      error: err => console.error("Error fetching item:", err)
    })
  }

}

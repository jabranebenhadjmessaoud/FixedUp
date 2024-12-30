import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ApiService } from '../api.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-electricianslist',
  imports: [CommonModule,RouterModule],
  templateUrl: './electricianslist.component.html',
  styleUrl: './electricianslist.component.css'
})
export class ElectricianslistComponent {

    workerslist: any[] = []
    electricianslist:any[]=[]
  
  constructor(private apiService: ApiService) {}
  ngOnInit(): void {
    this.apiService.getallworkers().subscribe({
      next: data =>{ this.workerslist = data ;
        this.electricianslist=this.workerslist.filter(aa => aa.category==="electricians")
      },
      error: err => console.error("Error fetching item:", err)
    })
  }

}

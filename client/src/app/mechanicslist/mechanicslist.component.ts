import { Component } from '@angular/core';
import { ApiService } from '../api.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-mechanicslist',
  imports: [CommonModule],
  templateUrl: './mechanicslist.component.html',
  styleUrl: './mechanicslist.component.css'
})
export class MechanicslistComponent {


  workerslist: any[] = []
  mechanicslist:any[]=[]
  
  constructor(private apiService: ApiService) {}
  ngOnInit(): void {
    this.apiService.getallworkers().subscribe({
      next: data =>{ this.workerslist = data ;
        this.mechanicslist=this.workerslist.filter(aa => aa.category==="mechanics")
      },
      error: err => console.error("Error fetching item:", err)
    })
  }

}

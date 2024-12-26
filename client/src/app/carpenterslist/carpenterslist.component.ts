import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-carpenterslist',
  imports: [CommonModule],
  templateUrl: './carpenterslist.component.html',
  styleUrl: './carpenterslist.component.css'
})
export class CarpenterslistComponent {

   workerslist: any[] = []
    carpenterslist:any[]=[]
  
  constructor(private apiService: ApiService) {}
  ngOnInit(): void {
    this.apiService.getallworkers().subscribe({
      next: data =>{ this.workerslist = data ;
        this.carpenterslist=this.workerslist.filter(aa => aa.category==="carpenters")
      },
      error: err => console.error("Error fetching item:", err)
    })
  }

}

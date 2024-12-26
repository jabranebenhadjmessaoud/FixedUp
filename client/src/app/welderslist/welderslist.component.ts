import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-welderslist',
  imports: [CommonModule],
  templateUrl: './welderslist.component.html',
  styleUrl: './welderslist.component.css'
})
export class WelderslistComponent {
  workerslist: any[] = []
  welderslist:any[]=[]

constructor(private apiService: ApiService) {}
ngOnInit(): void {
  this.apiService.getallworkers().subscribe({
    next: data =>{ this.workerslist = data ;
      this.welderslist=this.workerslist.filter(aa => aa.category==="welders")
    },
    error: err => console.error("Error fetching item:", err)
  })
}
}

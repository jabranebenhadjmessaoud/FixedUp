import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ApiService } from '../api.service';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-categories',
  imports: [CommonModule, RouterModule],
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.css'
})
export class CategoriesComponent {
  workerslist: any[] = []
  welderslist:any[]=[]
  plumberslist:any[]=[]
  mechanicslist:any[]=[]
  electricianslist:any[]=[]
  constructorslist:any[]=[]
  carpenterslist:any[]=[]
  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
      this.apiService.getallworkers().subscribe({
        next: data =>{ this.workerslist = data ;
          this.welderslist=this.workerslist.filter(aa => aa.category==="welders")
          this.plumberslist=this.workerslist.filter(aa => aa.category==="plumbers")
          this.mechanicslist=this.workerslist.filter(aa => aa.category==="mechanics")
          this.electricianslist=this.workerslist.filter(aa => aa.category==="electricians")
          this.constructorslist=this.workerslist.filter(aa => aa.category==="constructors")
          this.carpenterslist=this.workerslist.filter(aa => aa.category==="carpenters")
          console.log(this.workerslist);
        },
        error: err => console.error("Error fetching item:", err)
      })
    }
  }


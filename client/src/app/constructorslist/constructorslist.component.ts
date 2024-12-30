import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ApiService } from '../api.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-constructorslist',
  imports: [CommonModule,RouterModule],
  templateUrl: './constructorslist.component.html',
  styleUrl: './constructorslist.component.css'
})
export class ConstructorslistComponent {

  workerslist: any[] = []
  constructorslist:any[]=[]

constructor(private apiService: ApiService) {}
ngOnInit(): void {
  this.apiService.getallworkers().subscribe({
    next: data =>{ this.workerslist = data ;
      this.constructorslist=this.workerslist.filter(aa => aa.category==="constructors")
    },
    error: err => console.error("Error fetching item:", err)
  })
}

}

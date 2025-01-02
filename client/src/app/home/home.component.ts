import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { ApiService } from '../api.service';


@Component({
  selector: 'app-home',
  imports: [CommonModule,RouterModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  acctype:string|null=null
  constructor(private apiService:ApiService,private router:Router){}
  
    ngOnInit():void{
      this.acctype=localStorage.getItem("acctype")
    }
}

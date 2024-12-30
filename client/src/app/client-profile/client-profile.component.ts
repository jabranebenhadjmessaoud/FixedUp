import { Component } from '@angular/core';
import { User } from '../user';
import { ApiService } from '../api.service';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-client-profile',
  imports: [RouterModule],
  templateUrl: './client-profile.component.html',
  styleUrl: './client-profile.component.css'
})
export class ClientProfileComponent {
  data:User={}
  client_id:string|null=null

  constructor(private apiService: ApiService, private route: ActivatedRoute ,private router:Router) {}

  ngOnInit():void{
    this.client_id=localStorage.getItem('user_id')
    if(this.client_id){
      this.apiService.getOneClient(this.client_id).subscribe({
        next:res=>this.data=res,
        error:err=>console.error("Error fetching item:", err)
      })
    }
  }
}

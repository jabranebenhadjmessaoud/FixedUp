import { Component } from '@angular/core';
import { Route, Router, RouterModule, RouterOutlet } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
 import { MatIconModule } from '@angular/material/icon';
 import { MatToolbarModule } from '@angular/material/toolbar';
 import { MatCardModule } from '@angular/material/card';
 import { MatSidenavModule } from '@angular/material/sidenav';
 import { MatListModule } from '@angular/material/list';
 import { MatTableModule } from '@angular/material/table';
 import { MatInputModule } from '@angular/material/input';
 import { MatFormFieldModule } from '@angular/material/form-field';
 import { CommonModule } from '@angular/common';
import { ApiService } from './api.service';

 
@Component({
  selector: 'app-root',
  imports: [RouterOutlet,CommonModule,MatButtonModule,MatIconModule,MatToolbarModule,MatCardModule,MatSidenavModule,MatListModule,MatTableModule,MatInputModule,MatFormFieldModule,RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  acctype:string|null=null

  constructor(private apiService:ApiService,private router:Router){}

  ngOnInit():void{
    this.acctype=localStorage.getItem("acctype")
  }

  onLogout(): void {
    if(this.acctype=="Worker"){
      this.apiService.logoutWorker().subscribe({
        next: () => {
          console.log('User logged out successfully');
          localStorage.removeItem('user_id');
          localStorage.removeItem('token');
          localStorage.removeItem('acctype');
          this.router.navigate(['/login']);
          window.location.reload()
        },
        error: (err) => {
          console.error('Error during logout:', err);
        }
      });
    }else{
      this.apiService.logoutClient().subscribe({
        next: () => {
          console.log('User logged out successfully');
          localStorage.removeItem('user_id');
          localStorage.removeItem('token');
          localStorage.removeItem('acctype');
          this.router.navigate(['/login']);
          window.location.reload()
        },
        error: (err) => {
          console.error('Error during logout:', err);
        }
      });
    }
  }
}

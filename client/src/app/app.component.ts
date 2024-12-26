import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
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

 
@Component({
  selector: 'app-root',
  imports: [RouterOutlet,CommonModule,MatButtonModule,MatIconModule,MatToolbarModule,MatCardModule,MatSidenavModule,MatListModule,MatTableModule,MatInputModule,MatFormFieldModule,RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
}

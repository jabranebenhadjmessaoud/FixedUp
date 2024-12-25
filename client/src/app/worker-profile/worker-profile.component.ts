import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatCardModule } from "@angular/material/card";
@Component({
  selector: 'app-worker-profile',
  imports: [CommonModule,MatCardModule],
  templateUrl: './worker-profile.component.html',
  styleUrl: './worker-profile.component.css'
})
export class WorkerProfileComponent {

}

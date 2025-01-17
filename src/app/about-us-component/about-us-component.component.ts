import { Component } from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar';
import { RouterLink, RouterLinkActive, RouterOutlet, Router } from '@angular/router';
import {MatButtonModule} from '@angular/material/button';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-about-us-component',
  standalone: true,
  imports: [MatToolbarModule, RouterOutlet, RouterLink, RouterLinkActive,MatButtonModule,CommonModule],
  templateUrl: './about-us-component.component.html',
  styleUrl: './about-us-component.component.scss'
})
export class AboutUsComponentComponent {
  constructor(private router:Router){}
}

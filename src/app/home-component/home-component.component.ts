import { Component } from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar';
import { RouterLink, RouterLinkActive, RouterOutlet, Router } from '@angular/router';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
@Component({
  selector: 'app-home-component',
  standalone: true,
  imports: [MatToolbarModule, RouterOutlet, RouterLink, RouterLinkActive,MatButtonModule,MatCardModule],
  templateUrl: './home-component.component.html',
  styleUrl: './home-component.component.scss'
})
export class HomeComponentComponent {

  constructor(private router:Router){}
}

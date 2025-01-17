import { Component } from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar';
import { RouterLink, RouterLinkActive, RouterOutlet, Router } from '@angular/router';
@Component({
  selector: 'app-menu-component',
  standalone: true,
  imports: [MatToolbarModule, RouterOutlet, RouterLink, RouterLinkActive,],
  templateUrl: './menu-component.component.html',
  styleUrl: './menu-component.component.scss'
})
export class MenuComponentComponent {
  constructor(private router:Router){}
}

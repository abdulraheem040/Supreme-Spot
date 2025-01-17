import { Component } from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar';
import { RouterLink, RouterLinkActive, RouterOutlet, Router } from '@angular/router';
@Component({
  selector: 'app-footer-component',
  standalone: true,
  imports: [MatToolbarModule,RouterLink, RouterLinkActive, RouterOutlet],
  templateUrl: './footer-component.component.html',
  styleUrl: './footer-component.component.scss'
})
export class FooterComponentComponent {

  constructor(private router: Router){}
}

import { Component } from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar';
import { RouterLink, RouterLinkActive, RouterOutlet, Router } from '@angular/router';
import { NgFor } from '@angular/common';
@Component({
  selector: 'app-openhour-component',
  standalone: true,
  imports: [MatToolbarModule, RouterOutlet, RouterLink, RouterLinkActive,NgFor],
  templateUrl: './openhour-component.component.html',
  styleUrl: './openhour-component.component.scss'
})
export class OpenhourComponentComponent {
  
  constructor(private router:Router){}
  
}

import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  currentRoute: string = '';

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
    this.currentRoute = this.router.url.substring(1);
    console.log(this.currentRoute);
  };
}

import { Component } from '@angular/core';
import { NavbarComponent } from "../../shared/navbar/navbar.component";

@Component({
  selector: 'app-contact',
  imports: [NavbarComponent],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  email = "tnyanara@gmail.com";
  phone = "+263 78 308 7860";
}

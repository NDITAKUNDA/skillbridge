import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FaqsComponent } from "../../shared/faqs/faqs.component";

@Component({
  selector: 'app-pricing',
  imports: [
    CommonModule,
    FaqsComponent
],
  templateUrl: './pricing.component.html',
  styleUrl: './pricing.component.css'
})
export class PricingComponent {
  pricingMode: 'monthly' | 'yearly' = 'monthly';

  togglePricing(mode: 'monthly' | 'yearly') {
    this.pricingMode = mode;
  }
}

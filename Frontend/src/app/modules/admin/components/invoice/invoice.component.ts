import { Component } from '@angular/core';
import { Item } from '../../../../item';

@Component({
  selector: 'app-invoice',
  templateUrl: './invoice.component.html',
  styleUrl: './invoice.component.css'
})
export class InvoiceComponent {

  items: Item[] 

  subtotal: number = 0;
  serviceCost: number = 15; // Assuming fixed shipping cost

  constructor() {
    this.calculateSubtotal();
  }

  calculateSubtotal(): void {
    this.subtotal = this.items.reduce((total, item) => total + (item.itemCost * item.quantity), 0);
  }

  calculateTotal(): number {
    return this.subtotal + this.serviceCost;
  }

  printInvoice(): void {
    window.print();
  }

}

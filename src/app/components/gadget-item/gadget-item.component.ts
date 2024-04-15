import { Component, Input } from '@angular/core';
import { GadgetT } from '../../../types/types';

@Component({
  selector: 'app-gadget-item',
  standalone: true,
  imports: [],
  templateUrl: './gadget-item.component.html',
  styleUrl: './gadget-item.component.css',
})
export class GadgetItemComponent {
  @Input() gadget!: GadgetT;
  stars = Array(5);
  getRate(): number {
    return Math.round(this.gadget.rating);
  }
}

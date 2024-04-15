import { Component, Input, inject } from '@angular/core';
import { GadgetItemComponent } from '../gadget-item/gadget-item.component';
import { GadgetT } from '../../../types/types';
import { GadgetsService } from '../../services/gadgets.service';

@Component({
  selector: 'app-gadgets-list',
  standalone: true,
  imports: [GadgetItemComponent],
  templateUrl: './gadgets-list.component.html',
  styleUrl: './gadgets-list.component.css',
})
export class GadgetsListComponent {

  gadgetService = inject(GadgetsService)
}

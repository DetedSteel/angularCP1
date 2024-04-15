import { Component, inject } from '@angular/core';
import { GadgetsService } from '../../services/gadgets.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-filter',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './filter.component.html',
  styleUrl: './filter.component.css',
})
export class FilterComponent {
  gadgetService = inject(GadgetsService);
}

import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { GadgetsService } from './services/gadgets.service';
import { GadgetT } from '../types/types';
import { GadgetsListComponent } from './components/gadgets-list/gadgets-list.component';
import { FilterComponent } from './components/filter/filter.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, GadgetsListComponent, FilterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'myapp2';
  gadgetService = inject(GadgetsService);
  gadgets: GadgetT[] = [];
}

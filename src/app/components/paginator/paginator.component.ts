import { Component } from '@angular/core';
import { MatPaginatorModule } from '@angular/material/paginator';

@Component({
  selector: 'app-paginator',
  standalone: true,
  imports: [MatPaginatorModule],
  templateUrl: './paginator.component.html'
})
export class PaginatorComponent {

}

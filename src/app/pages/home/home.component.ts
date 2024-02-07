import { Component } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { CarouselComponent } from '../../components/carousel/carousel.component';
import { CardComponent } from '../../components/card/card.component';
import { PaginatorComponent } from '../../components/paginator/paginator.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent, CarouselComponent, CardComponent, PaginatorComponent],
  templateUrl: './home.component.html'
})
export class HomeComponent {

}

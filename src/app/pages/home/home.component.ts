import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { CarouselComponent } from '../../components/carousel/carousel.component';
import { CardComponent } from '../../components/card/card.component';
import { PaginatorComponent } from '../../components/paginator/paginator.component';
import { RetailStoreService } from '../../services/retail-store.service';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent, CarouselComponent, CardComponent, PaginatorComponent],
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {
  product: any
  constructor(private service: RetailStoreService) { 
  
  }
  ngOnInit(): void {
    this.service.getProducts().subscribe(
      {
        next: (res)=> this.product = res,
        error: (err) => console.log(err)
      }
    )
   }
}

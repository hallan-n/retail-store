import { Component, Input, OnInit } from '@angular/core';
import { initFlowbite } from 'flowbite';
import { RetailStoreService } from '../../services/retail-store.service';
import { productData } from '../../models/productData';


type Image = {
  id: number,
  src: string,
}
@Component({
  selector: 'app-carousel',
  standalone: true,
  imports: [],
  templateUrl: './carousel.component.html'
})
export class CarouselComponent implements OnInit {
  productThumb: string[] = []
  constructor(private service: RetailStoreService) { }
  ngOnInit(): void {
    initFlowbite();
    this.service.getProducts().subscribe(
      {
        next: (resp) => resp.slice(1,10).map((item)=>{
          this.productThumb.push(item.thumb)
        }),
        error: (error) => console.log(error),
      }
    )
  }
  images: Image[] = [
    { id: 0, src: "assets/profile.jpg" },
    { id: 1, src: "assets/profile.jpg" },
    { id: 2, src: "assets/profile.jpg" },
    { id: 3, src: "assets/profile.jpg" },
    { id: 4, src: "assets/profile.jpg" },
    { id: 5, src: "assets/profile.jpg" },
    { id: 6, src: "assets/profile.jpg" },
    { id: 7, src: "assets/profile.jpg" },
    { id: 8, src: "assets/profile.jpg" },
    { id: 9, src: "assets/profile.jpg" }
  ]
}

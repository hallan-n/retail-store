import { Component, OnInit } from '@angular/core';
import { initFlowbite } from 'flowbite';


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
  ngOnInit(): void {
    initFlowbite();
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

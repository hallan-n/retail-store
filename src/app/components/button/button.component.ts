import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [],
  template: `
  <button 
      class="{{styleButton}}"
      type="button"
  >{{ content }}</button>
  `
})
export class ButtonComponent implements OnChanges{
  @Input() content:string = ""
  @Input() styleButton:string = ""
  
  ngOnChanges(): void {
    this.setStyle(this.styleButton)
  }
  setStyle(styleType: string){
    switch (styleType) {
      case "primary":
        this.styleButton = "px-3 py-2 rounded-md bg-orange-600 hover:bg-orange-700 text-white font-bold transition-all"
        break;
      case "secondary":
        this.styleButton = "px-3 py-2 rounded-md border-4 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white font-bold transition-all"
        break;
    }
  }
}

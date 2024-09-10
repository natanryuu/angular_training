import { Component } from '@angular/core';

@Component({
  selector: 'uuu-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styles: ``
})
export class HomeComponent {
  imgUrl ="https://stickershop.line-scdn.net/stickershop/v1/sticker/452840469/android/sticker.png"
  width = 200;
  setWidth(inputWidth: string) {
    this.width = Number(inputWidth);
  }

}

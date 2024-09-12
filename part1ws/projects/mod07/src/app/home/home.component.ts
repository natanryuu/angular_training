import { CurrencyPipe } from '@angular/common';
import { Component, computed, effect, signal } from '@angular/core';

@Component({
  selector: 'uuu-home',
  standalone: true,
  imports: [CurrencyPipe],
  templateUrl: './home.component.html',
  styles: ``
})
export class HomeComponent {
  // 先給預設值
  price = signal<number>(5);
  qty = signal<number>(10);
  // 用computed來計算
  total = computed(() => this.price() * this.qty());

  changePrice() {
    this.price.set(Math.floor(Math.random() * 100));
  }

  addQty() {
    this.qty.update((v) => v + 1);
  }

  minusQty() {
    this.qty.update((v) => v - 1);
  }

  constructor(){
    effect(() => {
      console.log('price', this.price());
      console.log('qty', this.qty());
      console.log('total', this.total());
    });
  }
}

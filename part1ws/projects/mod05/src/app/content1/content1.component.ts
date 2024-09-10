import { NgClass, NgStyle } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-content1',
  standalone: true,
  imports: [NgClass , NgStyle],
  templateUrl: './content1.component.html',
  styles: ``
})
export class Content1Component {
  myclass = "subTitle dark"; //定義這樣的朵ngStyle 可以包含很多個樣式
  isDark = true;
  isTitle = false; //預設是關閉，所以會用到subtitle  [class]="isTitle ? 'title' :'subTitle' "
  myColor="Pink";
  mySize="20px";
  myStyle={color:this.myColor, 'font-size':this.mySize};

}

import { Component } from '@angular/core';
import { Content1Component } from "../content1/content1.component";
import { Content2Component } from "../content2/content2.component";

@Component({
  selector : 'uuu-home',
  standalone: true,
  imports: [Content1Component, Content2Component],
  template: `
    <h2>Home Component</h2>
    <uuu-content1></uuu-content1><hr/>
    <uuu-content2></uuu-content2><hr/>
    hello {{user}} <br>
    現在時刻: {{time}} <br>
    <div>
      <input type="text" #txtName [value]="user">
      <button (click)="onSend(txtName.value)">Send</button>
    </div>  
    `,
  styles: ``
})
export class HomeComponent {
  user = 'John';
  time = new Date();
  onSend(name: string) {
    this.user = name;
  }

}

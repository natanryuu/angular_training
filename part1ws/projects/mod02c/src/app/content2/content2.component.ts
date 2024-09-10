import { Component } from '@angular/core';

@Component({
  selector: 'uuu-content2',
  standalone: true,
  imports: [],
  templateUrl: './content2.component.html',
  styles: ``
})
export class Content2Component {
  country = '全部';

  countries = [
    { name: '全部', value: 'ALL' },
    { name: '美國', value: 'USA' },
    { name: '加拿大', value: 'CAN' },
    { name: '墨西哥', value: 'MEX' },
    { name: '英國', value: 'UK' },
    { name: '德國', value: 'GER' },
    { name: '日本', value: 'JPY' }
  ];

  db = [
    { name: 'JONH', age: '24', country: 'USA' },
    { name: 'TOM', age: '28', country: 'UK' },
    { name: 'KEN', age: '22', country: 'USA' },
    { name: 'JIM', age: '29', country: 'MEX' },
    { name: 'JACK', age: '21', country: 'CAN' },
    { name: 'JERRY', age: '26', country: 'GER' },
    { name: 'ALICE', age: '23', country: 'USA' },
    { name: 'BOB', age: '27', country: 'UK' },
    { name: 'CHARLIE', age: '25', country: 'MEX' },
    { name: 'DAVID', age: '30', country: 'CAN' },
    { name: 'EVE', age: '24', country: 'GER' },
    { name: 'FRANK', age: '28', country: 'USA' },
    { name: 'GRACE', age: '22', country: 'UK' },
    { name: 'HEIDI', age: '29', country: 'MEX' },
    { name: 'IVAN', age: '21', country: 'CAN' },
    { name: 'JUDY', age: '26', country: 'GER' },
    { name: 'MALLORY', age: '23', country: 'USA' },
    { name: 'NIA', age: '27', country: 'UK' },
    { name: 'OSCAR', age: '25', country: 'MEX' },
    { name: 'PEGGY', age: '30', country: 'CAN' },
  ];

  members = this.db;

  onchange(value: string) {
    this.country= value;
    if( value === 'ALL') {
      this.members = this.db;
      return;
    }
    this.members = this.db.filter(x => x.country === value);
  }
}

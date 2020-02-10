import { Component, OnInit } from '@angular/core';
import { MyOrderByPipe } from './shared/sort.pipe';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {

  constructor(private orderPipe: MyOrderByPipe) {
    console.log("order by digit");
    console.log(this.orderPipe.transform(this.items, 'digit'));
  }

  items = [
    { title: "third", value: "three", digit: 44 },
    { title: "second", value: "two", digit: 14 },
    { title: "first", value: "one", digit: 100 },
  ];

  field = "title";
  reverse = false;

}

import { Component } from '@angular/core';
import { timer } from 'rxjs';

const source = timer(1000, 2000);
const subscribe = source.subscribe(val => console.log(val));

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html'
})
export class AppComponent  {
  name = 'Angular';
  constructor() {
    setTimeout(() => {
      subscribe.unsubscribe();
    }, 10000)
  }
}

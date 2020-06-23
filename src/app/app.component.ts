import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  evenNumbers = [];
  oddNumbers = [];

  gameTimerFunction(timerVal : number){
    console.log(timerVal);
    if (timerVal%2 == 0)
    this.evenNumbers.push(timerVal);
  else
    this.oddNumbers.push(timerVal);
  }
}

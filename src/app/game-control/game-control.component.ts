import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {

  @Output() gameTimer = new EventEmitter<number>();
  @Input() evenNumber : number;
  @Input() oddNumber : number;
  timeRunner: boolean = false;
  timeCounter = 0;
  intervalManager: any;
  constructor() { }

  ngOnInit(): void {
  }

  onStart(){
      this.intervalManager = setInterval(() => {
        this.timeCounter = this.timeCounter + 1;
        this.gameTimer.emit(this.timeCounter);
      }, 1000);   
  }

  onStop(){
    clearInterval(this.intervalManager);
    console.log("Stopped!");
  }

}

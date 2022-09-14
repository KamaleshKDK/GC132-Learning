import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'child2',
  templateUrl: './child2.component.html',
  styleUrls: ['./child2.component.css']
})
export class Child2Component {
  
  @Output() somethingChanged = new EventEmitter();

  buttonClicked() {
    console.log("Button is Clicked");

    this.somethingChanged.emit("I am Clicked !!")
  }

}

import { Component } from '@angular/core';

@Component({
  selector: 'counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent  {

count:number=0;

increment(){
  this.count++;
}
decrement(){
  this.count--;
}

}

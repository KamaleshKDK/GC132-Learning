import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'child1',
  templateUrl: './child1.component.html',
  styleUrls: ['./child1.component.css']
})
export class Child1Component implements OnInit {

  @Input() sendParentName :string= "";
  
  constructor() { }

  ngOnInit(): void {
  }

}

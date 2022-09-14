import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  archives = [
    { year: 2022, month: 3 },
    { year: 2021, month: 2 },
    { year: 2020, month: 1 }]
  constructor() { }

  ngOnInit(): void {
  }

}

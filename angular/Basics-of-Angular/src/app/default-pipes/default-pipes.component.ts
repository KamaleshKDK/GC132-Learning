import { Component } from '@angular/core';

@Component({
  selector: 'default-pipes',
  templateUrl: './default-pipes.component.html',
  styleUrls: ['./default-pipes.component.css']
})
export class DefaultPipesComponent {

  details = {
    brand: "OnePlus",
    price: 34000,
    EMI: 1200.896,
    rating: "4.841",
    purchase: new Date(2022, 9, 3)

  }


}

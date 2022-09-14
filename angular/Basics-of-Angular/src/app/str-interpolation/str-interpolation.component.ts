import { Component } from '@angular/core';

@Component({
  selector: 'str-interpolation',
  templateUrl: './str-interpolation.component.html',
  styleUrls: ['./str-interpolation.component.css']
})
export class StrInterpolationComponent {
  updateName!: string;

  onClick() {
    this.updateName = "Kamalesh"
  }

}

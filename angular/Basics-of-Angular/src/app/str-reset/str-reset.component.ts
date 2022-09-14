import { Component } from '@angular/core';

@Component({
  selector: 'str-reset',
  templateUrl: './str-reset.component.html',
  styleUrls: ['./str-reset.component.css']
})
export class StrResetComponent{

  updateName!: string;
  update(){
      this.updateName = ""
  }

}

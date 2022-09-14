import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css'],

})
export class FavoriteComponent {
  @Input('isFav') isFav: any = true;
  @Input("isActive") isActive: boolean = true;
  @Input("likesCount") likesCount: number = 0;
  @Output('change') change = new EventEmitter();

  onClick1() {
    this.isFav = !this.isFav;
    this.change.emit({
      newValue: this.isFav
    });
  }
  onClick2() {
    this.likesCount += (this.isActive) ? -1 : +1;
    this.isActive  = ! this.isActive;
  }

}

export interface MyStarIsClicked {
  newValue: boolean
}
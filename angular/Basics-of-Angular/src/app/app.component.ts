import { Component, Input } from '@angular/core';
import { MyStarIsClicked } from './favorite/favorite.component';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'basics-of-angular';
  sendParentName: string = "";

  consoleData(event: any) {
    console.log(event);
  }

  post = {
    title: "Title",
    isFav: true
  }

  onFavChange(eventArgs : MyStarIsClicked) {
    console.log("Fav Changed " , eventArgs);

  }

  tweet = {
    body : '...',
    likesCount : 1,
    isLiked : true
  }
  
}

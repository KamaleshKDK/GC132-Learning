import { Component } from '@angular/core';

@Component({
  selector: 'new-anime-form',
  templateUrl: './new-anime-form.component.html',
  styleUrls: ['./new-anime-form.component.css']
})
export class NewAnimeFormComponent {
  animeCategories = [
    { id: 1, name: "Action" },
    { id: 2, name: "Comedy" },
    { id: 3, name: "Drama" },
    { id: 4, name: "Sci-Fi" },
    { id: 5, name: "Romance" },
  ]

  submit(anime:any){
    console.log(anime);
    

  }
}

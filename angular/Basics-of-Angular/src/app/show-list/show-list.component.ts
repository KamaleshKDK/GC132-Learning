import { Component } from '@angular/core';
import { ShowListService } from './list-service.service';

@Component({
  selector: 'show-list',
  templateUrl: './show-list.component.html',
  styleUrls: ['./show-list.component.css']
})
export class ShowListComponent {
  title = "List Of Anime"
  watchedanimes;

  constructor(service: ShowListService) {
    this.watchedanimes = service.getList();

  }


}

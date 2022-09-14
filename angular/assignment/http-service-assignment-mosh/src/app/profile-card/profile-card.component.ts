import { Component, OnInit } from '@angular/core';
import { ProfileService } from './service/profile.service';

@Component({
  selector: 'profile-card',
  templateUrl: './profile-card.component.html',
  styleUrls: ['./profile-card.component.css']
})
export class ProfileCardComponent implements OnInit {

  followers: any;
  constructor(private service: ProfileService) { }

  ngOnInit(): void {
    this.service.getData().subscribe(followers => {
      this.followers = followers

    })
  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngif-detail',
  templateUrl: './ngif-detail.component.html',
  styleUrls: ['./ngif-detail.component.scss']
})
export class NgifDetailComponent implements OnInit {
  loggedIn = false
  users = [
    {id: 1, name: 'User 1', profile: 'https://picsum.photos/50'},
    {id: 2, name: 'User 2', profile: ''},
    {id: 3, name: 'User 3', profile: 'https://picsum.photos/seed/picsum/50'},
    {id: 4, name: 'User 4', profile: ''},
  ]
  constructor() { }

  ngOnInit(): void {
  }

}

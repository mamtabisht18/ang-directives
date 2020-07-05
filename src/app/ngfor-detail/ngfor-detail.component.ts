import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngfor-detail',
  templateUrl: './ngfor-detail.component.html',
  styleUrls: ['./ngfor-detail.component.scss']
})
export class NgforDetailComponent implements OnInit {

  users = [
    {id: 1, name: 'Test User 1', role: 'ADMIN'},
    {id: 2, name: 'Test User 2', role: 'DEV'},
    {id: 3, name: 'Test User 3', role: 'DEV'},
  ]

  add(){
    const id = this.users.length+1
    let user = {
      id: id,
      name : `Test User ${id}`,
      role: 'Dev'
    }
    this.users.push(user)
    // this.users = [...this.users , user]
  }

  delete(i){
    this.users.splice(i,1)
  }

  constructor() { }

  ngOnInit(): void {
  }

}

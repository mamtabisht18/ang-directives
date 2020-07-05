import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-structural-directive',
  templateUrl: './structural-directive.component.html',
  styleUrls: ['./structural-directive.component.scss']
})
export class StructuralDirectiveComponent implements OnInit {

  name = "Mamta Bisht"
  displayName = true
  toggleNameDisplay(){
      this.displayName = !this.displayName
  }

  students = ['User 1', 'User 2', 'User 3']

  users = [
    {id: 1, name: 'Test 1', role: 'ADMIN'},
    {id: 2, name: 'Test 2', role: 'DEV'},
    {id: 3, name: 'Test 3', role: 'DEV'},
  ]
  constructor() { }

  ngOnInit(): void {
  }

}

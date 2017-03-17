import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  tw: number = 1
  show: boolean = false
  arr: number[] = [1, 2, 3, 4, 5]

  users: Object[] = [
    { "name": "zyx", "address": "TAIWAN" },
    { "name": "cmh", "address": "KOREAN" }
  ]
  
  constructor() { }

  ngOnInit() {
  }

  hello() {
    alert("Hello World")
  }

  change() {
    this.show = !this.show
  }
}

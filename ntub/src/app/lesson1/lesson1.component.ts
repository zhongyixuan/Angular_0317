import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-lesson1',
  templateUrl: './lesson1.component.html',
  styleUrls: ['./lesson1.component.css']
})
export class Lesson1Component implements OnInit {

  @Input('tw') tw: number = 100
  @Output() countChange: EventEmitter<number> = new EventEmitter<number>()

  constructor() { }

  ngOnInit() {
  }
  change() {
    this.countChange.emit(this.tw)
  }
}

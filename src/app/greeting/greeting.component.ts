import { Component, OnInit } from '@angular/core';
import { LessonService } from '../lesson.service';

@Component({
  selector: 'app-greeting',
  templateUrl: './greeting.component.html',
  styleUrls: ['./greeting.component.css'],
  providers: [LessonService]
})
export class GreetingComponent implements OnInit {
  public getCourse(){
    this.lessonService.getCourse();
  };

  constructor(private lessonService : LessonService) { }

  ngOnInit() {
  }

}

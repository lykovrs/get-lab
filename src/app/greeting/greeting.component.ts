import {Component, OnInit} from '@angular/core';
import {Route, Router} from '@angular/router'
import {LessonService} from '../lesson.service';

@Component({
  selector: 'app-greeting',
  templateUrl: './greeting.component.html',
  styleUrls: ['./greeting.component.css'],
  providers: [LessonService]
})
export class GreetingComponent implements OnInit {
  public getCourse() {
    this.lessonService.loadCourse();
    this._router.navigateByUrl('/textbook');
  };

  constructor(private lessonService: LessonService, private _router: Router) {
  }

  ngOnInit() {
  }

}

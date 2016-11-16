import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import 'rxjs/add/operator/map';
// import 'interfaces'

interface ICourse {
  name:string;
  lesons: [{
    name: string;
    url: string;
  }]
}

@Injectable()
export class LessonService {
  course: Observable<ICourse[]>
  private _course: BehaviorSubject<ICourse[]>;
  private _baseUrl: string;
  private _dataStore: {
    course: ICourse[]
  }


  constructor(private http: Http) {
    this._baseUrl = 'app/lessons/contents.json';
    this._dataStore = { course: [] };
    this._course = <BehaviorSubject<ICourse[]>>new BehaviorSubject([]);
    this.course = this._course.asObservable();
  }

  loadCourse() {
    this.http.get(`${this._baseUrl}`).map(response => response.json()).subscribe(data => {
      this._dataStore.course = data;
      this._course.next(Object.assign({}, this._dataStore).course);
    }, error => console.log('Could not load course.'));
  }
}

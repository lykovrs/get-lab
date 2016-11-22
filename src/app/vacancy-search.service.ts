import { Injectable }     from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';

@Injectable()
export class VacancySearchService {

  constructor(private http: Http) {}

  search(term: string): Observable<any[]> {
    return this.http
               .get(`https://api.hh.ru/vacancies?name=${term}`)
               .map((r: Response) => r.json().data);
  }

}

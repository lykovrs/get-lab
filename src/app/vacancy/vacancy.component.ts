import { Component, OnInit } from '@angular/core';
import { VacancySearchService } from './../vacancy-search.service';
import { Observable }        from 'rxjs/Observable';
import { Subject }           from 'rxjs/Subject';
import 'rxjs/add/operator/debounceTime';

@Component({
  selector: 'app-vacancy',
  templateUrl: './vacancy.component.html',
  providers: [VacancySearchService]
})
export class VacancyComponent implements OnInit {
  vacancies: Observable<any[]>;
  private searchTerms = new Subject<string>();
  constructor(
    private vacancySearchService: VacancySearchService
  ) { }

   search(term: string): void {
    this.searchTerms.next(term);
  }

  ngOnInit() {
      this.vacancies = this.searchTerms
      .debounceTime(300)
      .distinctUntilChanged()
      .switchMap(term => term
        ? this.vacancySearchService.search(term)
        : Observable.of<any[]>([]))
      .catch(error => {
        // TODO: real error handling
        // console.log(error);
        return Observable.of<any[]>([]);
      });
  }

}

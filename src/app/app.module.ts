import './rxjs-extensions';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { GreetingComponent } from './greeting/greeting.component';

import { RouterModule, Routes } from '@angular/router';
import { SummaryComponent } from './summary/summary.component';
import { VacancyComponent } from './vacancy/vacancy.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: '/greeting',
    pathMatch: 'full'
  },
  {
    path: 'greeting',
    component: GreetingComponent
  },
  {
    path: 'summary',
    component: SummaryComponent
  },
  {
    path: 'vacancy',
    component: VacancyComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    GreetingComponent,
    SummaryComponent,
    VacancyComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes)
  ],
  exports: [ RouterModule ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }

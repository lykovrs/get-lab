import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { GreetingComponent } from './greeting/greeting.component';
import { TextbookComponent } from './textbook/textbook.component';
import { QuestionnaireComponent } from './questionnaire/questionnaire.component';
import { RouterModule, Routes } from '@angular/router';

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
    path: 'textbook',
    component: TextbookComponent
  },
  {
    path: 'questionnaire',
    component: QuestionnaireComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    GreetingComponent,
    TextbookComponent,
    QuestionnaireComponent
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

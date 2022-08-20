import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SentenceMakerDashboardComponent } from './components/sentence-maker-dashboard/sentence-maker-dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    SentenceMakerDashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

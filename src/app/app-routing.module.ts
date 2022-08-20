import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SentenceMakerDashboardComponent } from './components/sentence-maker-dashboard/sentence-maker-dashboard.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', component: SentenceMakerDashboardComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

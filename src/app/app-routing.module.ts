import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WordcountComponent } from './wordcount/wordcount.component';

const routes: Routes = [
  {path:'', component:WordcountComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

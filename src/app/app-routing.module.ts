import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddCandidateComponent } from './components/add-candidate/add-candidate.component';


const routes: Routes = [
  { path: 'add', component: AddCandidateComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

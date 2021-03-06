import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PersonComponent } from './feature/person/person.component';

const routes: Routes = [
{path:'person', component:PersonComponent},
{path:'person/:id',component:PersonComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

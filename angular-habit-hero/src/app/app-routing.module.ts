import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HabitListComponent } from '../components/habit-list.component';
import { HabitFormComponent } from '../components/habit-form.component';

export const routes: Routes = [
  { path: 'habits', component: HabitListComponent },
  { path: 'habits/new', component: HabitFormComponent },
  { path: 'habits/edit/:id', component: HabitFormComponent },
  { path: '', redirectTo: '/habits', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

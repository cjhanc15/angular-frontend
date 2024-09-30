import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HabitListComponent } from '../components/habit-list.component';
import { HabitFormComponent } from '../components/habit-form.component';
import { HabitService } from '../services/habit.service';

@NgModule({
  declarations: [],
  imports: [AppComponent, BrowserModule, AppRoutingModule, HttpClientModule, FormsModule, HabitListComponent, HabitFormComponent],
  providers: [HabitService],
  bootstrap: [],
})
export class AppModule {}

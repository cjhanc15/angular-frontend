import { Component, OnInit } from '@angular/core';
import { HabitService } from '../services/habit.service';
import { Habit } from '../models/habit';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

@Component({
  standalone: true,
  selector: 'app-habit-list',
  templateUrl: './habit-list.component.html',
  imports: [RouterLink, CommonModule, HttpClientModule]
})
export class HabitListComponent implements OnInit {
  habits: Habit[] = [];

  constructor(private habitService: HabitService) {}

  ngOnInit(): void {
    this.habitService.getHabits().subscribe((habits) => {
      this.habits = habits;
    });
  }

  deleteHabit(id: number): void {
    this.habitService.deleteHabit(id).subscribe(() => {
      this.habits = this.habits.filter((habit) => habit.habitID !== id);
    });
  }
}
export { HabitService };


import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HabitService } from '../services/habit.service';
import { Habit } from '../models/habit';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@Component({
  standalone: true,
  selector: 'app-habit-form',
  templateUrl: './habit-form.component.html',
  imports: [FormsModule, HttpClientModule]
})
export class HabitFormComponent implements OnInit {
  habit: Habit = { userID: 1, name: '', category: '', startDate: '', frequency: '', goal: '' };
  isEdit: boolean = false;

  constructor(
    private habitService: HabitService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const id = params['id'];  // Get the habit ID from the URL params
      if (id) {
        this.isEdit = true;
        this.habitService.getHabit(id).subscribe((habit) => {
          this.habit = habit;  // Ensure the habit object is loaded correctly with ID
          this.habit.startDate = this.formatDateForInput(this.habit.startDate);
        });
      }
    });
  }

  saveHabit(): void {
    if (this.isEdit) {
      // Make sure to use the correct field for ID (habitID or id)
      this.habitService.updateHabit(this.habit.habitID!, this.habit) // If habitID, replace with this.habit.habitID!
        .subscribe(() => {
          this.router.navigate(['/habits']);
        });
    } else {
      this.habitService.createHabit(this.habit)
        .subscribe(() => {
          this.router.navigate(['/habits']);
        });
    }
  }

  // Optional helper function to format date for HTML input[type="date"]
  formatDateForInput(dateString: string): string {
    const date = new Date(dateString);
    const year = date.getFullYear();
    const month = ('0' + (date.getMonth() + 1)).slice(-2); // Ensure 2 digits
    const day = ('0' + date.getDate()).slice(-2); // Ensure 2 digits
    return `${year}-${month}-${day}`;
  }
}

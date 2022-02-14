import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { UiService } from 'src/app/services/ui.service';
import { Task } from 'src/app/models/Task';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {

  @Output() onTaskAdd: EventEmitter<Task> = new EventEmitter();

  text!: string;
  date!: string;
  reminder: boolean = false;
  showAddTask!: boolean;
  subscription: Subscription;

  constructor(private uiService: UiService) {
    this.subscription = this.uiService
      .onToggle()
      .subscribe(val => (this.showAddTask = val));
  }

  ngOnInit(): void {
  }

  onSubmit(): void {
    if (!this.text) {
      alert('Please add a task.');
      return;
    } else if (!this.date) {
      alert('Please add a date');
      return;
    }

    const newTask = {
      text: this.text,
      date: this.date,
      reminder: this.reminder
    };

    this.onTaskAdd.emit(newTask);

    this.text = '';
    this.date = '';
    this.reminder = false;
  }

}

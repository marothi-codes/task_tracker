import { Component, OnInit } from '@angular/core';
import { TaskService } from 'src/app/services/task.service';
import { Task } from '../../models/Task';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {

  tasks: Task[] = [];

  constructor(private taskService: TaskService) { }

  ngOnInit(): void {
    this.getTasks();
  }

  getTasks(): void {
    this.taskService.getTasks().subscribe((tasks) => {
      this.tasks = tasks;
    });
  }

  addTask(task: Task): void {
    this.taskService.postTask(task)
      .subscribe(() => {
        (this.tasks.push(task));
        (this.getTasks());
      });
  }

  toggleReminder(task: Task): void {
    task.reminder = !task.reminder;
    this.taskService.patchTask(task)
      .subscribe();
  }

  deleteTask(task: Task): void {
    this.taskService.deleteTask(task).subscribe(() => 
      this.tasks = this.tasks.filter(t => t.id !== task.id));
  }

}

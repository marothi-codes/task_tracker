import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Task } from 'src/app/models/Task';
import { faTimes } from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css']
})
export class TaskItemComponent implements OnInit {

  @Input() task!: Task;
  @Output() onTaskDelete: EventEmitter<Task> = new EventEmitter();
  @Output() onTaskPatch: EventEmitter<Task> = new EventEmitter();
  faTimes = faTimes;

  constructor() { }

  ngOnInit(): void {
  }

  onDeleteClick(task: Task): void {
    this.onTaskDelete.emit(task);
  }

  onReminderToggle(task: Task): void {
    this.onTaskPatch.emit(task);
  }

}

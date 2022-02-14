import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Task } from '../models/Task';
// import { TASKS } from '../mock-tasks';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  private apiUrl = 'http://localhost:5000/api/task';

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  constructor(private http: HttpClient) { }

  getTasks(): Observable<Task[]> {
    return this.http.get<Task[]>(this.apiUrl);
  }

  postTask(task: Task): Observable<Task> {
    return this.http.post<Task>(this.apiUrl,task, this.httpOptions);
  }

  patchTask(task: Task): Observable<Task> {
    return this.http.patch<Task>(`${this.apiUrl}/${task.id}`,
      { reminder: task.reminder },
      this.httpOptions
    );
  }

  deleteTask(task: Task): Observable<Task> {
    const url = `${this.apiUrl}/${task.id}`;
    return this.http.delete<Task>(url);
  }
}

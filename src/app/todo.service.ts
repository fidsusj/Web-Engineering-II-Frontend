import { Injectable } from '@angular/core';
import {Todo} from './todo';
import {Observable, of} from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor(public http: HttpClient) {}

  public create(todo: Todo): Observable<Todo> {
    return this.http.post<Todo>('http://localhost:3000/todos', todo);
  }

  public get(todoID: number): Observable<Todo> {
    return this.http.get<Todo>('http://localhost:3000/todos/' + todoID);
  }

  public getAll(): Observable<Todo[]> {
    return this.http.get<Todo[]>('http://localhost:3000/todos');
  }

  public update(todo: Todo): Observable<void> {
    return this.http.put<void>('http://localhost:3000/todos' + todo.id, todo);
  }

  public delete(todoID: number): Observable<void> {
    return this.http.put<void>('http://localhost:3000/todos/' + todoID, todoID);
  }

}

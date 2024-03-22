import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ToDo } from '../Models/to-do';

@Injectable({
  providedIn: 'root'
})
export class ToDoService {

  private apiUrl = 'http://localhost:3000/todos';
  constructor(private _HttpClient: HttpClient) { }

  
   // Get all ToDos from the API
  getAll(): Observable<ToDo[]> {  // Returns an Observable of ToDo[]
    return this._HttpClient.get<ToDo[]>(this.apiUrl); 
  }

    //Create a new ToDo item
  createTodo(todo: ToDo): Observable<ToDo> {
    return this._HttpClient.post<ToDo>(this.apiUrl,JSON.stringify(todo));
  }
  
  //Get a single ToDo item by ID 
  getTodoById(id: string): Observable<ToDo> {
    return this._HttpClient.get<ToDo>(this.apiUrl + '/' + id);
  }

  //Update an existing ToDo item 
  updateTodo(todo: ToDo): Observable<ToDo> {
    return this._HttpClient.put<ToDo>(this.apiUrl + '/' + todo.id, JSON.stringify(todo));
  }

  //Delete an existing ToDo item
  deleteTodo(id: string): Observable<void> {
    return this._HttpClient.delete<void>(this.apiUrl + '/' + id);
  }
}
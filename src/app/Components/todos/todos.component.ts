import { Component, OnInit } from '@angular/core';
import { ToDo } from '../../Models/to-do';
import { ToDoService } from '../../Services/to-do.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-todos',
  standalone: true,
  imports: [CommonModule, RouterLink, FormsModule],
  templateUrl: './todos.component.html',
  styleUrl: './todos.component.scss',
})
export class TodosComponent implements OnInit {
  todos: ToDo[] = [];
  
  constructor(private _toDoService: ToDoService) {}
 
  ngOnInit(): void {
    // Call the getTodos() method when the component is initialized
    this.getTodos();
  }

  //Get all ToDo items from the API by Call the getAll() method and store in the component's todos list.
  getTodos() {
    this._toDoService.getAll().subscribe({
      next: (data) => {
        this.todos = data;
      },
    });
  }

  //Delete an existing ToDo item
  deleteTodo(id: string): void {
    this._toDoService.deleteTodo(id).subscribe({
      next: () => {
        this.todos = this.todos.filter((todo) => todo.id !== id); // Remove the deleted ToDo item from the list of ToDo items
      },
    });
  }


}

import { Component } from '@angular/core';
import { ToDo } from '../../Models/to-do';
import { ToDoService } from '../../Services/to-do.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-create-todo',
  standalone: true,
  imports: [CommonModule, RouterLink, FormsModule],
  templateUrl: './create-todo.component.html',
  styleUrl: './create-todo.component.scss'
})
export class CreateTodoComponent {
  todos: ToDo[] = [];
  newTodo: ToDo = {} as ToDo;

  constructor(private _toDoService: ToDoService, private router : Router) {}

  // Create a new ToDo item and add it to the list of ToDo items.
  creatTodo(): void {
    const newTodo1 = { id: this.newTodo.id, title: this.newTodo.title, description: this.newTodo.description, completed: false,
    }; 
    // Create a new ToDo item with a temporary ID and the title from the input field
    this.newTodo = newTodo1;
    this._toDoService.createTodo(newTodo1).subscribe({
      next: (data) => {
        this.todos.push(data); // Add the newly created ToDo item to the list of ToDo items
        this.router.navigate(['/todos']); // Navigate to the todos list component
      },
    });
  }
}

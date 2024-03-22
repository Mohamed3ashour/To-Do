import { Component, OnInit } from '@angular/core';
import { ToDo } from '../../Models/to-do';
import { ToDoService } from '../../Services/to-do.service';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-todo-details',
  standalone: true,
  imports: [CommonModule, RouterLink, FormsModule],
  templateUrl: './todo-details.component.html',
  styleUrl: './todo-details.component.scss'
})
export class TodoDetailsComponent implements OnInit{
  todo: ToDo | undefined;
  
  constructor(private _toDoService: ToDoService, private route: ActivatedRoute, private router : Router) { }
  ngOnInit(): void {
    this.getTodo();
  }


  // Get the ToDo item with the given id from the API and store it in the component's todo field
  getTodo() {
    const id = String(this.route.snapshot.paramMap.get('id'));
    this._toDoService.getTodoById(id).subscribe({
        next: (data) => {
          this.todo = data; 
        }
      });
  }

  // Update a ToDo item in the database with the new data from the component's todo field
  updateTodo() {
    if (this.todo) {
      this._toDoService.updateTodo(this.todo).subscribe({ 
          next: () => { 
            this.router.navigate(['/todos']); // Navigate to the todos list component
          } 
        }); 
    } 
  } 


}

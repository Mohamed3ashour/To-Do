import { Routes } from '@angular/router';
import { PageNotFoundComponent } from './Components/page-not-found/page-not-found.component';
import { TodosComponent } from './Components/todos/todos.component';
import { TodoDetailsComponent } from './Components/todo-details/todo-details.component';
import { CreateTodoComponent } from './Components/create-todo/create-todo.component';

export const routes: Routes = [
    { path: '', pathMatch: 'full', redirectTo: 'todos' },    
    { path: 'todos', component: TodosComponent ,title:"Todos"},
    { path: 'createtodo', component: CreateTodoComponent ,title:"createTodo"},
    { path: 'todos/:id', component: TodoDetailsComponent ,title:"Todo Details"},
   
    { path: '**', component: PageNotFoundComponent ,title:"Page Not Found"},
];

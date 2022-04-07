import { Component, OnInit } from '@angular/core';
import { TileCoordinator } from '@angular/material/grid-list/tile-coordinator';
import { Todo } from 'src/app/models/todo';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  
  todos: Array<Todo> = [];
  todo: Todo = {
    id: 0,
    title: '',
    done: false,
  }
  constructor() { }

  ngOnInit(): void {
    
  }

  addTodo(title: string){
    const id = this.todos.length + 1;
    this.todo.title = title;
    this.todos.push({
      id: id,
      title: title,
      done: false
    });
  }

  removeTodo(todo:any){
    let index = this.todos.indexOf(todo);
    this.todos.splice(index, 1);
  }

}

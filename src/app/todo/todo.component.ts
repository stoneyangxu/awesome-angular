import { Component, OnInit } from '@angular/core';
import { Todo } from 'app/model/todo';
import { TodoService } from 'app/todo/todo.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {

  todos: Todo[] = [];
  desc: '';

  constructor(
    private todoService: TodoService
  ) { }

  ngOnInit() {
  }

  addTodo() {
    this.todos = this.todoService.addTodo(this.desc);
    this.desc = '';
  }
}

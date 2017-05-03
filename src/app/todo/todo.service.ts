import { Injectable } from '@angular/core';
import { Todo } from 'app/model/todo';
import { UUID } from 'angular2-uuid';

@Injectable()
export class TodoService {

  private todos: Todo[] = [];

  constructor() { }

  addTodo(desc) {
    this.todos.push({
      id: UUID.UUID(),
      desc: desc,
      completed: false
    });

    return this.todos;
  }
}

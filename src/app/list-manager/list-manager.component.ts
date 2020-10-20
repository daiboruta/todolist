import { Component, OnInit } from '@angular/core';
import { TodoItem } from '../interfaces/todo-item';
import { TodoListService } from '../services/todo-list.service';

@Component({
  selector: 'app-list-manager',
  templateUrl: './list-manager.component.html',
  styleUrls: ['./list-manager.component.scss']
})
export class ListManagerComponent implements OnInit {

  todoList: TodoItem[] = [];

  constructor(private todoListService: TodoListService) {

    this.todoListService = todoListService;
  }

  ngOnInit(): void {

    this.todoList = this.todoListService.getTodoList();
  }

  addTodo(description: string) {
    
    this.todoListService.addItem({ description });
  }

  removeItem(item: TodoItem) {

    this.todoListService.deleteItem(item);
  }
}

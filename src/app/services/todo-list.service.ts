import { Injectable } from '@angular/core';
import { TodoItem } from '../interfaces/todo-item';
import { StorageService } from './storage.service';

const storageKey = 'MyTodoList';

const defaultTodoList = [
  {description: "Tarea 1"},
  {description: "Tarea 2"},
  {description: "Tarea 3"},
  {description: "Tarea 4"}
]

@Injectable({
  providedIn: 'root'
})
export class TodoListService {

  private todoList: TodoItem[];

  constructor(private storageService: StorageService) {

    this.todoList = storageService.getData(storageKey) || defaultTodoList;
  }

  getTodoList() {

    return this.todoList;
  }

  addItem(item: TodoItem) {

    this.todoList.push(item);
    this.save();
  }

  updateItem(item: TodoItem, update: any) {

    const index = this.todoList.indexOf(item);
    this.todoList[index] = {...item, ...update};
    this.save();
  }

  deleteItem(item: TodoItem) {

    const index = this.todoList.indexOf(item);
    this.todoList.splice(index, 1);
    this.save();
  }

  private save() {
    
    this.storageService.setData(storageKey, this.todoList);
  }
}

import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { TodoItem } from '../interfaces/todo-item';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss']
})
export class TodoItemComponent implements OnInit {

  @Input() item: TodoItem = {description: ""};
  @Output() remove: EventEmitter<TodoItem> = new EventEmitter();
  
  constructor() {}

  ngOnInit(): void {
  }

  removeItem() {

    this.remove.emit(this.item);
  }
}
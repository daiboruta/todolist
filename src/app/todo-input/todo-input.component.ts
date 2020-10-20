import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NgForm, NgModel } from '@angular/forms';

@Component({
  selector: 'app-todo-input',
  templateUrl: './todo-input.component.html',
  styleUrls: ['./todo-input.component.scss']
})
export class TodoInputComponent implements OnInit {

  description: string = '';
  valid = true;

  @Output() newTodo: EventEmitter<string> = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  submitTodo(inputForm: NgForm) {
    
    if(inputForm.valid) {

      console.log(inputForm.value.description);
      this.newTodo.emit(inputForm.value.description);
      inputForm.resetForm();
    }
    else {}

  }

  isValid(field: NgModel): boolean {

    return field.invalid && (field.dirty || field.touched) && field.errors && field.errors.required;
  }
}

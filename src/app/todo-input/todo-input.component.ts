import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NgForm, NgModel } from '@angular/forms';

@Component({
  selector: 'app-todo-input',
  templateUrl: './todo-input.component.html',
  styleUrls: ['./todo-input.component.scss']
})
export class TodoInputComponent implements OnInit {

  description: string = '';
  validClick = true;

  @Output() newTodo: EventEmitter<string> = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  submitTodo(inputForm: NgForm) {
    
    if(inputForm.valid) {

      this.newTodo.emit(inputForm.value.description);
      inputForm.resetForm();
      this.validClick = true;
    }
    else {

      this.validClick = false;
    }
  }

  isValid(field: NgModel): boolean {

    const invalidField = field.invalid && (field.dirty || field.touched);
    const invalidClick = !this.validClick && (field.pristine || field.untouched);

    return !invalidField && !invalidClick;
  }
}

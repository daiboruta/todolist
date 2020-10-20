import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TodoInputComponent } from './todo-input/todo-input.component';
import { TodoItemComponent } from './todo-item/todo-item.component';
import { ListManagerComponent } from './list-manager/list-manager.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    TodoInputComponent,
    TodoItemComponent,
    ListManagerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

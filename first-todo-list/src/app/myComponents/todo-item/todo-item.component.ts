import { Component,OnInit,Input, Output, EventEmitter } from '@angular/core';
import { Todo } from 'src/app/Todo';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})

export class TodoItemComponent implements OnInit{
@Input() todo?: Todo;
@Output() todoDelete : EventEmitter<Todo> = new EventEmitter();
constructor() {}

ngOnInit(): void{


}
onclick(todo?:Todo){
  this.todoDelete.emit(todo)
  console.log("Onclick has been trigger")
}
// onSubmit(todo?:Todo){
//   this.todoAdd.emit(todo)
//   console.log("Onclick has been trigger")
// }
}


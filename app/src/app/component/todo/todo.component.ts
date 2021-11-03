import { Component, OnInit } from '@angular/core';
import { Todo } from './../../models/Todo';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  todo!: Todo[];

  inputToDo:string = "";

  constructor() { }

  ngOnInit(): void {
    this.todo = [
      {
        content: 'First task',
        completed: false
      },
      {
        content: 'Second task',
        completed: false
      }
    ]
  }
  toggleDone (id:number) {
    this.todo.map((v , i) => {
      if(i == id) v.completed = ! v.completed;

      return v;
    })
  }

  deleteToDo(id:number) {
    this.todo = this.todo.filter((v, i) => i != id); 
  }

  addToDo () {
    if(this.inputToDo.trim() !=""){
      this.todo.push({
        content: this.inputToDo,
        completed: false
      });
    }
    this.inputToDo="";
  }
}

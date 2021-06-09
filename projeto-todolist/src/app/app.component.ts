import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'projeto-todolist';

  tarefa:string = "";
  horario = "";
  tarefas:any[] = [];
  
  
  adicionartarefa (){
     const dados = { tarefas: this.tarefa, horario: this.horario }
     this.tarefas.push(dados);
     console.log(this.tarefas)
  }
  }
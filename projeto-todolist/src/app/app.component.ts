import { Atividade } from './atividade';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  tarefa:string = "";
  horario = "";
  tarefas:any [] = [];
 
  formAtividade!: FormGroup;

constructor(){}

createForm(atividade: Atividade){
  this.formAtividade = new FormGroup({
    atividade: new FormControl(atividade.atividade),
    horario: new FormControl(atividade.horario)
   })
}

ngOnInit(): void {
  this.createForm(new Atividade());
}

onSubmit(){
  console.log(this.formAtividade.value); 
  const dados = { 
    atividade: this.formAtividade.get('tarefa')?.value, 
    horario: this.formAtividade.get('horario')?.value }
  console.log(dados)
}
}


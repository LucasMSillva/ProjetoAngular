import { Atividade } from './atividade';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  public tarefas: Array<Atividade> = [];
  public formAtividade!: FormGroup;

  constructor(){}

  createForm(atividade: Atividade){
    this.formAtividade = new FormGroup({
      atividade: new FormControl(atividade.atividade),
      horario: new FormControl(atividade.horario)
    });
  }

  ngOnInit(): void {
    this.createForm(new Atividade());
  }

  onSubmit(){
    const dados = {
      atividade: this.formAtividade.get('atividade')?.value,
      horario: this.formAtividade.get('horario')?.value
    }
    this.tarefas.push(dados);
  }

  // removeAtividade(){
  //   this.tarefas.splice((tarefa), 1)
  // }

  remove(atividade: Atividade): void {
    this.tarefas = this.tarefas.filter(item => item !== atividade);
  }
}
import { Atividade } from './atividade';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

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
      atividade: new FormControl(atividade.atividade,[Validators.required, Validators.maxLength(10)]),
      horario: new FormControl(atividade.horario, [Validators.required])
    });
    
  }

  ngOnInit(): void {
    this.createForm(new Atividade());
  }

  onSubmit(){
    if (this.formAtividade.valid) {
      const dados = {
      atividade: this.formAtividade.get('atividade')?.value,
      horario: this.formAtividade.get('horario')?.value
    }
    
    this.tarefas.push(dados);
    this.formAtividade.reset();
    return;
  }
  alert('Campo Obrigatorio');

  // removeAtividade(){
  //   this.tarefas.splice((tarefa), 1)
  // }
}
}

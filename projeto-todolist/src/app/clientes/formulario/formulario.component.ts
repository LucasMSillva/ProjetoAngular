import { Cliente } from './../shared/cliente';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

 formCliente!: FormGroup;

  constructor() { }

  createForm(cliente: Cliente){
    this.formCliente = new FormGroup({
      nome: new FormControl(cliente.nome),
      data: new FormControl(cliente.data),
    })
  }

  onSubmit(){
    console.log(this.formCliente.value);
  }

  ngOnInit(): void {
    this.createForm(new Cliente());
  }

}

import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';


export interface Pessoa {
  nome: string;
  idade: number;
  sexo: string;
  salario: string;
}

export interface Pessoas extends Array<Pessoa>{}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})


export class HomeComponent {

  clientes: Pessoas = [
    {
      nome:'Alexandre',
      sexo:'m',
      idade:20,
      salario:'12000'
    }, {
      nome:'Roberto',
      sexo:'m',
      idade:33,
      salario:'10000'
    }, {
      nome:'Maura',
      sexo:'f',
      idade:23,
      salario:'11000'
    }, {
      nome:'Claudia',
      sexo:'f',
      idade:22,
      salario:'13000'
    }
  
  ];

  displayedColumns: string[] = ['nome', 'sexo', 'idade', 'salario'];
  dataSource !: MatTableDataSource<any>;

  ngOnInit(){
    this.dataSource = new MatTableDataSource(this.clientes);
        
  } 

 
  
}

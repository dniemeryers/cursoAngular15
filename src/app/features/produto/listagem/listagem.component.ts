import { Component, OnInit } from '@angular/core';
import { ProdutoService } from '../services/produto.service';

@Component({
  selector: 'app-listagem',
  templateUrl: './listagem.component.html',
  styleUrls: ['./listagem.component.scss']
})
export class ListagemComponent implements OnInit {

  constructor(private produtoService: ProdutoService){

  }

  // RXJS
  //JavaScript axios   axios.get() assincrona
  // assync   return await === Promisse
  // Angular usa RXJS e o RXJS não usa promisse
  // Angular usa Observable === Cano

  ngOnInit(): void {
      this.produtoService.getCidadePeloCep().subscribe( resposta => {
      console.log(resposta)
    });
  }

  // getDoJavaScript(){
  // this.prodtoService.getCidadePeloCep().them( resposta =>{
  // this.cep = resposta
  //})
  //}

}

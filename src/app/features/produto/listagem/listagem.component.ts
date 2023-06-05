import { Component, OnInit } from '@angular/core';
import { ProdutoService } from '../services/produto.service';
import { Produto, Produtos } from '../models/produto.model';
import { Router,  } from '@angular/router';

@Component({
  selector: 'app-listagem',
  templateUrl: './listagem.component.html',
  styleUrls: ['./listagem.component.scss']
})
export class ListagemComponent implements OnInit {

  constructor(private produtoService: ProdutoService,
    private router: Router){

  }

  // RXJS
  //JavaScript axios   axios.get() assincrona
  // assync   return await === Promisse
  // Angular usa RXJS e o RXJS não usa promisse
  // Angular usa Observable === Cano

  produtos!: Produtos;

  ngOnInit(): void {
      this.produtoService.getProdutos()
      .subscribe(produtos => {
        this.produtos = produtos;
        console.log(this.produtos)
      });      
  }

  selecionarProduto(produto: Produto){
    console.log(produto)
    this.router.navigate(['produto','editar-produto', produto.id]);    
  }

  criarNovoProduto(){
    this.router.navigate(['produto','novo-produto']);
  }

  excluirProduto(produto: Produto){
    this.produtoService.excluirProduto(produto.id.toString())
    .subscribe(resposta =>{
      this.router.navigate(['produto']);

    });

  }

  // getDoJavaScript(){
  // this.prodtoService.getCidadePeloCep().them( resposta =>{
  // this.cep = resposta
  //})
  //}

}


import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Produto, Produtos } from '../models/produto.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

  //Injeção de dependencias - adiciona referencias

 private baseUrl = 'http://localhost:3000/'

  
  constructor(private http: HttpClient) { }

  // recuperar lista de produtos
  getProdutos(): Observable<Produtos>{
    return this.http.get<Produtos>(`${this.baseUrl}produtos`)
  }

  getProdutoPeloId(id: string): Observable<Produto>{
    return this.http.get<Produto>(`${this.baseUrl}produtos/${id}`)
  }
}

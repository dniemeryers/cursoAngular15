import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  private appUrl='http://localhost:3000/'

  constructor(private http: HttpClient) { }

    // recupera nossos clientes
    getClientes(): Observable<any> {
      return this.http.get(`${this.appUrl}clientes`);
    

  }
}
function getClientes() {
  throw new Error('Function not implemented.');
}


import { Component, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-novo',
  templateUrl: './novo.component.html',
  styleUrls: ['./novo.component.scss']
})
export class NovoComponent {

   // -----------------4 tipos de data Bind--------------------------
  // interppolação {{title}}
  // property bind <img [src]="imgurl"
  // Event Dinding <button (click)="chamarFuncao()">
  // two-way databnding <input[(ngModel)]="title"> - precisa add no app.modules o FormsModule
  

  //-----------------diretivas de decisão---------------------------
  // ngIf usando o complemeto else, usamos para exibir ou ocultar elementos tomado por decisão lógico
  // ngSwitch 

  //----------------diretivas estruturais --------------------------
  // *ngFor
  
  // pipes |  
  // pipes customizados



  title = '';

  titleSwitch = null;

  

  imgUrl = "https://media.licdn.com/dms/image/D4D35AQEhJRrMkW9YjA/profile-framedphoto-shrink_200_200/0/1684614670890?e=1686164400&v=beta&t=FlXjJI8qaVjmJphKocLIq4Zx9cJAop_BHR4vRGPOhbA";

  constructor(){
   
    console.log('Componente construtor')
  }
  ngAfterViewChecked(): void {
    console.log('after View Checked')
  }
  ngAfterContentChecked(): void {
    console.log('After Content Checked');
  }
  ngAfterViewInit(): void {
   console.log('after view initi');
  }

  ngOnDestroy(): void {
    throw new Error('')
  }

  ngAfterContentInit(): void {
    console.log('Componente content Initi')
  }

  ngOnChanges(changes: SimpleChanges): void{
    console.log('Componente OnChange')
  }


  ngOnInit(): void {
   console.log('Component OnInit')
  
  }
  
  ngDoCheck(): void {
    console.log('Componente DoCheck')
  }

  mudarTexto(){
    this.title+='a';
  }

  chamarFuncao(){
    console.log('esse é um click');
  }

}

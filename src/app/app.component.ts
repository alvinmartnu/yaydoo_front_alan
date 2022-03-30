import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'YAYDOO';

  cadenas:boolean = false;
  palabras:boolean = false;
  teorica:boolean = false;
  crud:boolean = false;


  openModule(valor: number){
    switch(valor) { 
      case 0: { 
         this.cadenas = true;
         this.palabras = false;
         this.teorica = false;
         this.crud = false;
         break; 
      } 
      case 1: { 
        this.cadenas = false;
        this.palabras = true;
        this.teorica = false;
        this.crud = false;
         break; 
      }
      case 2: { 
        this.cadenas = false;
        this.palabras = false;
        this.teorica = true;
        this.crud = false;
        break; 
      } 
      case 3: { 
        this.cadenas = false;
        this.palabras = false;
        this.teorica = false;
        this.crud = true; 
        break; 
      }
      default: { 
        this.cadenas = false;
        this.palabras = false;
        this.teorica = false;
        this.crud = false;; 
         break; 
      } 
   } 
  }
  

}

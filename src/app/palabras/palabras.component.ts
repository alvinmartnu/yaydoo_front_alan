import { Component, OnInit } from '@angular/core';
import { Modpalabras } from '../interface/modpalabras';
import { YaydooService } from '../services/yaydoo.service';

@Component({
  selector: 'app-palabras',
  templateUrl: './palabras.component.html',
  styleUrls: ['./palabras.component.css']
})
export class PalabrasComponent implements OnInit {

  loading = false;
  message = ''
  isError = false
  isResult = false
  result: any
  textCuenta = ''

  constructor(public service: YaydooService) { }

  ngOnInit(): void {
  }

  validaInfo(){

    this.loading = true;
    this.isError = false;
    this.isResult = false

      if (this.textCuenta !== ''){
        var aux = {} as Modpalabras
        aux.texto = this.textCuenta

        this.service.cuentaPalabras(aux).subscribe(data => {
          this.result = data;
          this.loading = false;
          this.isResult = true

        },
        err => {
          this.loading = false;
          this.message = 'Ocurrio un error con el servicio: '+ err;
          this.isError = true;
        });
          
      }else{
        this.loading = false;
        this.message = 'Debe introducir un texto para contar las palabras.';
        this.isError = true;
      }
  }

  close(){
    this.isError = false;
  }

}

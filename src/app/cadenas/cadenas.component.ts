import { Component, OnInit } from '@angular/core';
import { Modcadena } from '../interface/modcadena';
import { Rescadena } from '../interface/rescadena';
import { YaydooService } from '../services/yaydoo.service';



@Component({
  selector: 'app-cadenas',
  templateUrl: './cadenas.component.html',
  styleUrls: ['./cadenas.component.css']
})
export class CadenasComponent implements OnInit {

  userUno: string = ""
  userDos: string = ""
  num1Dos: number = 0
  num2Dos: number = 0
  num3Dos: number = 0
  num1Uno: number = 0
  num2Uno: number = 0
  num3Uno: number = 0
  message: string = ''
  isError: boolean = false
  isCorrect: boolean = false;
  public loading = false;
  result = {} as Rescadena;

  constructor(public service: YaydooService) { }

  ngOnInit(): void {
  }

  validaInfo() {

    this.loading = true;
    this.isError = false;
    this.isCorrect = false;

    if (Boolean(this.userUno) && Boolean(this.userDos)) {
      if (this.userUno !== this.userDos) {
        this.validaCadenas();
      } else {
        this.loading = false;
        this.message = 'Los participantes no se pueden llamar igual';
        this.isError = true;
      }

    } else {
      console.log("holaaaaa");
      this.loading = false;
      this.message = 'Los Nombres no deben estar vacios';
      this.isError = true;

    }
  }

  close() {
    this.isError = false;
  }

  validaCadenas() {
    if (Boolean(this.num1Uno) || Boolean(this.num2Uno) || Boolean(this.num3Uno) || Boolean(this.num1Dos) || Boolean(this.num2Dos) || Boolean(this.num3Dos)) {

      if (!(this.num1Uno > 0 && this.num1Uno < 101) || !(this.num2Uno > 0 && this.num2Uno < 101) || !(this.num3Uno > 0 && this.num3Uno < 101) || !(this.num1Dos > 0 && this.num1Dos < 101) || !(this.num2Dos > 0 && this.num2Dos < 101) || !(this.num3Dos > 0 && this.num3Dos < 101)) {
        this.loading = false;
        this.message = 'Recuerde que las calificaciones deben ser mayores a 0 y menores a 100';
        this.isError = true;
      } else {

        var aux= {} as Modcadena

        aux.nameUno = this.userUno
        aux.nameDos = this.userDos
        aux.lstUno =  [this.num1Uno,this.num2Uno,this.num3Uno]
        aux.lstDos = [this.num1Dos,this.num2Dos,this.num3Dos]

        this.service.comparaCadenas(aux).subscribe(data => {
          this.result = data;

          this.loading = false;
          this.message = 'Marcador: '+ this.result.puntuacion+' && Ganador: '+this.result.ganador;
          this.isCorrect = true

        },
        err => {
          this.loading = false;
          this.message = 'Ocurrio un error con el servicio: '+ err;
          this.isError = true;
        });


        
      }

    } else {
      this.loading = false;
      this.message = 'Los Campos  de las calificaciones son requeridos.';
      this.isError = true;
    }
  }

}





import { Injectable } from '@angular/core';
import { Observable } from 'rxjs'
import { HttpClient } from "@angular/common/http";
import { Modcadena } from '../interface/modcadena';
import { Modpalabras } from '../interface/modpalabras';
import { ModUser } from '../interface/mod-user';

@Injectable({
  providedIn: 'root'
})
export class YaydooService {

  constructor(private http: HttpClient) { }

  comparaCadenas(cadena: Modcadena): Observable<any>{
    return this.http.post('http://localhost:8080/yaydoo/arreglos', cadena);
  }

  cuentaPalabras(texto: Modpalabras): Observable<any>{
    return this.http.post('http://localhost:8080/yaydoo/cadena', texto);
  }

  getUsers(): Observable<any>{
    return this.http.get('http://localhost:8080/yaydoo/getAll');
  }

  updateUser(user:ModUser): Observable<any>{
    return this.http.put('http://localhost:8080/yaydoo/update/'+user.idUser,user);
  }

  deleteUser(user:ModUser): Observable<any>{
    return this.http.delete('http://localhost:8080/yaydoo/delete/'+user.idUser);
  }

}

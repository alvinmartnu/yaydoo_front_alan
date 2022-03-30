import { HttpErrorResponse } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ModUser } from '../interface/mod-user';
import { YaydooService } from '../services/yaydoo.service';
import {NgbActiveModal, NgbModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.css']
})
export class CrudComponent implements OnInit {

  displayedColumns: string[] = ['idUser', 'name', 'email', 'password','address','phone','bornDate','age','editar','eliminar'];
  public dataSource!: MatTableDataSource<ModUser>;
  private dataArray: any;

  constructor(public service: YaydooService, private modalService: NgbModal) { }

  ngOnInit(): void {
    this.service.getUsers().subscribe(
      data => {
        this.dataArray = data
        this.dataSource = new MatTableDataSource<ModUser>(this.dataArray);
      },
      (err: HttpErrorResponse) => {
        if (err.error instanceof Error) {
          console.log("Client-side error");
        } else {
          console.log("Server-side error: "+err.message);
        }
      }
    );
  }

  editar(item:ModUser){

    console.log(item.email)

    const modalRef = this.modalService.open(NgbdModalContent);
    modalRef.componentInstance.user = item;
   

  }

  updateList(){
    this.service.getUsers().subscribe(
      data => {
        this.dataArray = data
        this.dataSource = new MatTableDataSource<ModUser>(this.dataArray);
      },
      (err: HttpErrorResponse) => {
        if (err.error instanceof Error) {
          console.log("Client-side error");
        } else {
          console.log("Server-side error: "+err.message);
        }
      }
    );
  }

  eliminar(item:ModUser){

    console.log(item.email)

    this.service.deleteUser(item).subscribe(
      data => {

        this.updateList()
      },
      (err: HttpErrorResponse) => {
        if (err.error instanceof Error) {
          console.log("Client-side error");
        } else {
          console.log("Server-side error: "+err.message);
        }
      }
    );

  }

}


@Component({
  selector: 'ngbd-modal-content',
  templateUrl: './alertuser.component.html',
})
export class NgbdModalContent {
  @Input()
  user!: ModUser;

  constructor(public service: YaydooService, public activeModal: NgbActiveModal) {}


  updateUser(){
    this.service.updateUser(this.user).subscribe(
      data => {
        this.activeModal.close
      },
      (err: HttpErrorResponse) => {
        if (err.error instanceof Error) {
          console.log("Client-side error");
        } else {
          console.log("Server-side error: "+err.message);
        }
      }
    );
  }

}

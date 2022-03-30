import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CadenasComponent } from './cadenas/cadenas.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { YaydooService } from './services/yaydoo.service';
import { HttpClientModule } from "@angular/common/http";
import { PalabrasComponent } from './palabras/palabras.component';
import { CrudComponent } from './crud/crud.component';
import {MatTableModule} from '@angular/material/table';


@NgModule({
  declarations: [
    AppComponent,
    CadenasComponent,
    PalabrasComponent,
    CrudComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatFormFieldModule,
    FormsModule,
    MatProgressSpinnerModule,
    HttpClientModule,
    MatTableModule
    
    ],
  providers: [YaydooService],
  bootstrap: [AppComponent]
})
export class AppModule { }

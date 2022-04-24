import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router'
import {MatDatepickerModule} from '@angular/material/datepicker';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BonosComponent } from './bonos/bonos.component';
import { ShowBonosComponent } from './bonos/show-bonos/show-bonos.component';
import { AddEditBonosComponent } from './bonos/add-edit-bonos/add-edit-bonos.component';
import { BonosService } from '../app/bonos.service';
import { ShowUsuariosComponent } from './usuarios/show-usuarios/show-usuarios.component';
import { AddEditUsuariosComponent } from './usuarios/add-edit-usuarios/add-edit-usuarios.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatNativeDateModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MatFormFieldControl } from '@angular/material/form-field';



@NgModule({
  declarations: [
    AppComponent,
    BonosComponent,
    ShowBonosComponent,
    AddEditBonosComponent,
    ShowUsuariosComponent,
    AddEditUsuariosComponent,
    UsuariosComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    NgbModule,
    RouterModule.forChild([
      { path: 'bonos', component: BonosComponent },
      { path: 'usuarios', component: UsuariosComponent }
    ]),
    BrowserAnimationsModule, MatDatepickerModule, MatNativeDateModule, MatFormFieldModule 
  ],
  providers: [BonosService],
  bootstrap: [AppComponent]
})
export class AppModule { }

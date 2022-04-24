import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { BonosService } from 'src/app/bonos.service';

@Component({
  selector: 'app-add-edit-usuarios',
  templateUrl: './add-edit-usuarios.component.html',
  styleUrls: ['./add-edit-usuarios.component.css']
})
export class AddEditUsuariosComponent implements OnInit {  

  UsuarioList$! : Observable<any[]>;
  constructor(private service:BonosService) { }

  @Input() usuario:any;
  id:number=0;
  nombre: string ="";
  apellido: string ="";
  cedula : string="";

  ngOnInit(): void {
    this.id =this.usuario.id;
    this.nombre = this.usuario.nombre;
    this.apellido = this.usuario.apellido;
    this.cedula = this.usuario.cedula;
  }

  agregarUsuario(){
    var usuario ={
      nombre:this.nombre,
      apellido:this.apellido,
      cedula:this.cedula  
    }
    this.service.addUsuario(usuario).subscribe(res => {
      var closeModalBtn = document.getElementById('add-edit-modal-close');
      if(closeModalBtn){
        closeModalBtn.click();
      }

      var showAddSuccess = document.getElementById('add-success-alert');
      if(showAddSuccess){
        showAddSuccess.style.display = "block";
      }
      setTimeout(function(){
        if(showAddSuccess){
          showAddSuccess.style.display ="none"
        }
      }, 4000);
    })
  }
  
  actualizarUsuario(){
    var usuario ={
      id:this.id,
      nombre:this.nombre,
      apellido:this.apellido,
      cedula:this.cedula    
    }
    var id:number =this.id;
    this.service.updateUsuario(id,usuario).subscribe(res => {
      var closeModalBtn = document.getElementById('add-edit-modal-close');
      if(closeModalBtn){
        closeModalBtn.click();
      }

      var showUpdateSuccess = document.getElementById('update-success-alert');
      if(showUpdateSuccess){
        showUpdateSuccess.style.display = "block";
      }
      setTimeout(function(){
        if(showUpdateSuccess){
          showUpdateSuccess.style.display ="none"
        }
      }, 4000);
    })
  }
}


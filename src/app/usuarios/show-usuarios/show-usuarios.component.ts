import { Component, OnInit } from '@angular/core';
import { BonosService } from 'src/app/bonos.service';
import { Observable} from 'rxjs';

@Component({
  selector: 'app-show-usuarios',
  templateUrl: './show-usuarios.component.html',
  styleUrls: ['./show-usuarios.component.css']
})
export class ShowUsuariosComponent implements OnInit {

  usuarioList$!:Observable<any[]>;

  constructor(private service:BonosService) { }

  ngOnInit(): void {
    this.usuarioList$ = this.service.getUsuarioList();
  }
  modalTitle:string='';
  activeAddEditUsuario:boolean=false;
  usuario:any;

  modalAdd(){
    this.usuario ={
      id:0,
      nombre:null,
      apellido:null,
      cedula:null
    }
    this.modalTitle = "Agregar Usuario";
    this.activeAddEditUsuario=true; 
  }

  modalEdit(item:any){
      this.usuario=item;
      this.modalTitle = "Editar Usuario";
      this.activeAddEditUsuario=true; 
  }

  delete(item:any){
    if(confirm(`Estas seguro que desea eliminar el usuario ${item.nombre} ${item.apellido}`)){
      this.service.deleteUsuario(item.id).subscribe(res=>{
        var closeModalBtn = document.getElementById('add-edit-modal-close');
      if(closeModalBtn){
        closeModalBtn.click();
      }

      var showDeleteSuccess = document.getElementById('delete-success-alert');
      if(showDeleteSuccess){
        showDeleteSuccess.style.display = "block";
      }
      setTimeout(function(){
        if(showDeleteSuccess){
          showDeleteSuccess.style.display ="none"
        }
      }, 4000);
      this.usuarioList$ = this.service.getUsuarioList();
      })
    }
  }

  modalClose(){
    this.activeAddEditUsuario = false;
    this.usuarioList$ = this.service.getUsuarioList();
  }
}

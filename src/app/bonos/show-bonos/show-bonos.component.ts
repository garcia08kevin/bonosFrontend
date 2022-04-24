import { Component, OnInit } from '@angular/core';
import { BonosService } from 'src/app/bonos.service';
import { Observable} from 'rxjs';
import { FormBuilder, FormControl } from '@angular/forms';
import { validateHorizontalPosition } from '@angular/cdk/overlay';

@Component({
  selector: 'app-show-bonos',
  templateUrl: './show-bonos.component.html',
  styleUrls: ['./show-bonos.component.css']
})
export class ShowBonosComponent implements OnInit {
  dateObjectControl = new FormControl(new Date());
  fechaInicio: any;
  fechaFin: any;
  
  bonosArray :any [] = [];
  bonoList$!:Observable<any[]>;
  usuarioList$!:Observable<any[]>;
  usuarioList:any=[];
  usuarioMapName:Map<number, string> = new Map();
  usuarioMapLastname:Map<number, string> = new Map();

  constructor(private service:BonosService, private fb: FormBuilder) {
   }

  ngOnInit(): void {
    this.bonoList$ = this.service.getBonoList();
    this.usuarioList$ = this.service.getUsuarioList();
    this.mapeoNombreUsuario();
    this.mapeoApellidoUsuario();
  }
getDate(){
    this.bonosArray= [];  
    this.service.getBonoList().subscribe(data => {
      this.bonosArray = data;
      let filtroFecha = this.bonosArray.filter(bonosArray => bonosArray.fecha >= this.fechaInicio && bonosArray.fecha <= this.fechaFin)
      console.log(filtroFecha);
      this.bonosArray = filtroFecha ; 
    })
  }
  modalTitle:string="";
  activarAddEditBono:boolean=false;
  bono:any;

  modalAdd(){
    this.bono = {
      id : 0,
      valor:null,
      descripcion:null,
      fecha:null
    }
    this.modalTitle = "Agregar Bono";
    this.activarAddEditBono= true;
  }


  mapeoNombreUsuario(){
    this.service.getUsuarioList().subscribe(data => {
      this.usuarioList = data;

      for(let i = 0; i < data.length; i++){
        this.usuarioMapName.set(this.usuarioList[i].id,this.usuarioList[i].nombre)
      }
    })
  }
  
  modalEdit(item:any){
    this.bono=item;
    this.modalTitle = "Editar Bono";
    this.activarAddEditBono=true; 
  }

  delete(item:any){
    if(confirm(`Estas seguro que desea eliminar este bono`)){
      this.service.deleteBono(item.id).subscribe(res=>{
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
      this.bonoList$ = this.service.getBonoList();
      })
    }
  }

modalClose(){
  this.activarAddEditBono = false;
  this.bonoList$ = this.service.getBonoList();
}

  mapeoApellidoUsuario(){
    this.service.getUsuarioList().subscribe(data => {
      this.usuarioList = data;

      for(let i = 0; i < data.length; i++){
        this.usuarioMapLastname.set(this.usuarioList[i].id,this.usuarioList[i].apellido)
      }
    })
  }
}

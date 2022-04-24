import { Component, OnInit } from '@angular/core';
import { BonosService } from 'src/app/bonos.service';
import { Observable} from 'rxjs';
import { Input } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-add-edit-bonos',
  templateUrl: './add-edit-bonos.component.html',
  styleUrls: ['./add-edit-bonos.component.css']
})
export class AddEditBonosComponent implements OnInit {

  dateObjectControl = new FormControl(new Date());
  model:any;
  bonoList$!:Observable<any[]>;
  usuarioList$!:Observable<any[]>;
  
  constructor(private service: BonosService) { }

  @Input() bono:any;
  id: number = 0;
  valor: number = 0;
  descripcion : string = "";
  fecha: any;
  usuarioId!:number;

  ngOnInit(): void {
    this.id = this.bono.id;
    this.valor = this.bono.valor;
    this.descripcion = this.bono.descripcion;
    this.fecha = this.bono.fecha;
    this.usuarioId = this.bono.usuarioId;
    this.bonoList$ = this.service.getBonoList(); 
    this.usuarioList$ = this.service.getUsuarioList();
  }
  agregarBono(){
    var bono ={
      valor:this.valor,
      descripcion:this.descripcion,
      fecha:this.fecha,
      usuarioId:this.usuarioId
    }
    this.service.addBono(bono).subscribe(res => {
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
  
  actualizarBono(){
    var bono ={
      id:this.id,
      valor:this.valor,
      descripcion:this.descripcion,
      fecha:this.fecha,
      usuarioId:this.usuarioId    
    }
    var id:number =this.id;
    this.service.updateBono(id,bono).subscribe(res => {
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

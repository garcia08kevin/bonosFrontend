import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class BonosService {

  readonly UserApiurl = "https://localhost:7298/api";

  constructor(private http:HttpClient) { }

  //Bono

  getBonoList():Observable<any[]>{
    return this.http.get<any>(this.UserApiurl + '/bonos');
  }

  addBono(data:any){
    return this.http.post(this.UserApiurl +'/bonos', data )
  }

  updateBono(id:number|string, data:any){
    return this.http.put(this.UserApiurl + `/bonos/${id}`,data);
  }
  deleteBono(id:number|string){
    return this.http.delete(this.UserApiurl + `/bonos/${id}`);
  }

    //Usuario
    
  getUsuarioList():Observable<any[]>{
    return this.http.get<any>(this.UserApiurl + '/usuarios');
  }
  
  addUsuario(data:any){
    return this.http.post(this.UserApiurl +'/usuarios', data )
  }
  
  updateUsuario(id:number|string, data:any){
    return this.http.put(this.UserApiurl + `/usuarios/${id}`,data);
  }

  deleteUsuario(id:number|string){
    return this.http.delete(this.UserApiurl + `/usuarios/${id}`);
  }

}

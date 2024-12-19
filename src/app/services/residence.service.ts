import { Injectable } from '@angular/core';
import { Residence } from '../core/models/residence';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ResidenceService {

  listResidences:Residence[]=[
    {id:1,"name": "El fel","address":"Borj Cedria", "image":"../../assets/images/R1.jpg", status: "Disponible"},
     {id:2,"name": "El yasmine", "address":"Ezzahra","image":"../../assets/images/R2.jpg", status: "Disponible" },
     {id:3,"name": "El Arij", "address":"Rades","image":"../../assets/images/R3.jpg", status: "Vendu"},
     {id:4,"name": "El Anber","address":"inconnu", "image":"../../assets/images/R4.jpg", status: "En Construction"}
   ];
  constructor(private http:HttpClient) { }
    urlApi = 'http://localhost:3000/residences'

  getAllResidences(): Observable <Residence[]>{
    return this.http.get<Residence[]>(this.urlApi);
  }
  getResidenceById(id:number): Observable <Residence>{
    return this.http.get<Residence>(this.urlApi+'/'+id);
  }

  addResidence(res:Residence): Observable <Residence>{
    return this.http.post<Residence>(this.urlApi,res);
  }

  deleteResidence(id:number):Observable <Residence>{
    return this.http.delete<Residence>(this.urlApi +'/'+id);
  }
  UpdateResidence(rs:Residence , id:number) : Observable <Residence>{
    return this.http.put<Residence>(this.urlApi+'/'+id,rs)
  }
}

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
  constructor(private http : HttpClient) { }


  getAllResidence() :Observable<Residence[]>{ 
    return this.http.get<Residence[]>('http://localhost:3000/residences')
  }
  getResidenceById(id:any):Observable<Residence>{
return this.http.get<Residence>("http://localhost:3000/residences/"+id);
  }

  addResidence(Rs :Residence):Observable<any>{
    return this.http.post("http://localhost:3000/residences",Rs);
  }
}

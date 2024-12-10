import { Component } from '@angular/core';
import { Residence } from '../core/models/residence';
import { ResidenceService } from '../services/residence.service';

@Component({
  selector: 'app-residence',
  templateUrl: './residence.component.html',
  styleUrls: ['./residence.component.css']
})
export class ResidenceComponent {
  searchAdresse = '';
    listFavorites:Residence[]=[];
  listResidences:Residence[]=[]

  ngOnInit(){
    this.rs.getAllResidence().subscribe({
      next: (data) => this.listResidences = data,
      error : (err)=> console.log(err),
    }
  
    )
  }
  
   constructor (private rs:ResidenceService) {}

   showLoc(adress : string){
     if (adress === "inconnu"){
        alert("Adresse inconnue");
     }else {
        console.log("Adresse: "+adress);
     }
   }

   like(r:Residence){
    if (!this.listFavorites.includes(r)){
      this.listFavorites.push(r);
    }
   }

  filterResidence(): Residence[] {
    return this.listResidences.filter((residence) => {
      return residence.address.toLowerCase().includes
      (this.searchAdresse.toLowerCase());
    } );
  }

}

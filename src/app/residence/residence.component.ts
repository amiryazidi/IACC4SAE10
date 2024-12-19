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
  //this.listResidences=this.rs.listResidences

  this.rs.getAllResidences().subscribe(
    res=> this.listResidences=res,
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
 supp(id:number){
  this.rs.deleteResidence(id).subscribe(
    ()=>this.ngOnInit()
  )
 }
 
}

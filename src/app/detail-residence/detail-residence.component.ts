import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Residence } from '../core/models/residence';
import { ResidenceService } from '../services/residence.service';

@Component({
  selector: 'app-detail-residence',
  templateUrl: './detail-residence.component.html',
  styleUrls: ['./detail-residence.component.css']
})
export class DetailResidenceComponent {
id!:number;
residence!: Residence


   constructor(private act: ActivatedRoute,private rs:ResidenceService) {}

   ngOnInit(){

    this.id =  this.act.snapshot.params['id'];
    //this.residence= this.rs.listResidences.find(residence => residence.id == this.id)!;

this.rs.getResidenceById(this.id).subscribe(
(r)=>{
this.residence=r;
}

)


   }
}

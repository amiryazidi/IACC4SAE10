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
  id!: number;
  residence!: Residence


  constructor(private act: ActivatedRoute, private rs: ResidenceService) { }

  ngOnInit() {
    this.id = this.act.snapshot.params['id'];
    //this.residence= this.rs.listResidences.find(residence => residence.id == this.id)!;
    this.rs.getResidenceById(this.id).subscribe(
      (res: Residence) => this.residence = res
    );

  }

  navigateToLocation() {
    window.open(`https://www.google.com/maps/place/${this.residence.address}`, '_blank')
  }
}

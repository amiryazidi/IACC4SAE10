import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ResidenceService } from '../services/residence.service';
import { Residence } from '../core/models/residence';

@Component({
  selector: 'app-add-residence',
  templateUrl: './add-residence.component.html',
  styleUrls: ['./add-residence.component.css']
})
export class AddResidenceComponent {

  residenceForm: FormGroup;
  id!:number
  residence!:Residence

  constructor(private fb: FormBuilder, private rt:Router,private rs:ResidenceService,private Act:ActivatedRoute) {
    this.residenceForm = this.fb.group({
      id: [{ value: this.generateId(), disabled: true }, Validators.required],
      name: ['', [Validators.required, Validators.minLength(3)]],
      address: ['', [Validators.required, Validators.minLength(10)]],
      image: ['../../assets/images/R1.jpg', Validators.required], // URL statique
      status: ['', Validators.required],
    });
  }
  generateId(): number {
    return Math.floor(Math.random() * 10000) + 1; // Génération d'un ID aléatoire
  }

  ngOnInit(){
     // 1 - recuperetion de l'id depuis l'url
    this.id=this.Act.snapshot.params['id'];
      //2- recuperation de l'objet residence par id
      this.rs.getResidenceById(this.id).subscribe(
          data=>{
            this.residence=data
            console.log(this.residence)
            //3- patcher les données dans le formulaire
            this.residenceForm.patchValue(this.residence)
          }
      )
  }
  addResidence() {
    if (this.residenceForm.valid) {
      if (this.id){
        this.rs.UpdateResidence(this.residenceForm.value,this.id).subscribe(
          ()=> this.rt.navigateByUrl('/residence')
        );
      }else {
 // this.rs.listResidences.push(this.residenceForm.value);
      // this.rt.navigate(['/residence']);
      // console.log('Residence data:', this.residenceForm.value);
      this.rs.addResidence(this.residenceForm.value).subscribe(
        ()=> this.rt.navigateByUrl('/residence')
      );
      }
}
  }
}

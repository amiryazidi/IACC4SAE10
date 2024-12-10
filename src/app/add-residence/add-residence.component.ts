import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ResidenceService } from '../services/residence.service';

@Component({
  selector: 'app-add-residence',
  templateUrl: './add-residence.component.html',
  styleUrls: ['./add-residence.component.css']
})
export class AddResidenceComponent {

  residenceForm: FormGroup;

  constructor(private fb: FormBuilder, private rt:Router,private rs:ResidenceService) {
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
  addResidence() {
    if (this.residenceForm.valid) {
      this.rs.addResidence(this.residenceForm.value).subscribe(
       ()=> this.rt.navigateByUrl('/residence')
      );
      
      console.log('Residence data:', this.residenceForm.value);
     
    } else {
      console.log('Form is invalid');
    }
  }
}

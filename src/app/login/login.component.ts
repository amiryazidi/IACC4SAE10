import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

   login = new FormControl('',Validators.required);
   pwd =  new FormControl('', Validators.required);


   formLogin = new FormGroup({
    login : new FormControl('',[Validators.required,Validators.minLength(5)]),
    pwd :  new FormControl('', [Validators.required,Validators.pattern('[a-zA-Z0-9]*')]),
    email :  new FormControl('', [Validators.required,Validators.email]),
    phone :  new FormControl('', [Validators.required,Validators.pattern('[0-9]{8}$')]),
    address :  new FormControl('', Validators.required),
   })

   save(){
      console.log(this.formLogin);
   }

}

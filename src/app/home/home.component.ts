import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  AgeMax! :number
  title:string =  'welcome to our project';
  color:string = 'red';
  user=[
    {id:1 , name:'ahmed' , age:25, email:'ahmed@gmail.com',image:""},
    {id:2 , name:'amir' , age:30, email:'amir@gmail.com'},
    {id:3 , name:'nada' , age:35, email:'nada@gmail.com'},
  ]

  show(){
    alert('hello')
  }
}

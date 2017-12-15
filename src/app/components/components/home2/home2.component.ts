import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home2.component.html',
  styleUrls: ['./home2.component.css']
})
export class HomeComponent2 implements OnInit {
  name:string;
  age:number;
  
  constructor() {

   }

  ngOnInit() {
    this.name = 'ROSE';
  }

}

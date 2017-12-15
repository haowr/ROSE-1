import { Component, OnInit } from '@angular/core';
import { ValidateService } from '../services/validate.service';
import { AuthService } from '../services/auth.service'
import {FlashMessagesService} from 'angular2-flash-messages';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  name: String;
  username: String;
  email: String;
  password: String;


  constructor(private validateservice: ValidateService, private flashmessages: FlashMessagesService,
              private authservice: AuthService, private router: Router ) { }

  ngOnInit() {


  }
  onRegisterSubmit(){
    const user= {

      name: this.name,
      username: this.username,
      email: this.email,
      password: this.password

    }
        console.log(user);

     // Required Fields
    if(!this.validateservice.validateRegister(user)){
      this.flashmessages.show('Please fill in all fields', {cssClass: 'alert-danger', timeout: 3000});
      return false;
    }

    // Validate Email
    if(!this.validateservice.validateEmail(user.email)){
      this.flashmessages.show('Please use a valid email', {cssClass: 'alert-danger', timeout: 3000});
      return false;
    }

    //REGISTER USER
       // Register user
    this.authservice.registerUser(user).subscribe(data => {
      if(data.success){
        this.flashmessages.show('You are now registered and can log in', {cssClass: 'alert-success', timeout: 3000});
        this.router.navigate(['/login']);
      } else {
        this.flashmessages.show('Something went wrong', {cssClass: 'alert-danger', timeout: 3000});
        this.router.navigate(['/register']);
      }
    });
  }}
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  usersArray: object[] = [];
  arrayOfAdmins: object[] = [];
  thereMustBeOneAdmin: boolean;
  cannotRemoveAdmin:boolean = false;
  constructor(private authservice: AuthService) { }

  ngOnInit() {


    this.authservice.getUsers().subscribe(data => {
      this.arrayOfAdmins = [];

      console.log(data)
      this.usersArray = data.users;
      for (let i = 0; i < data.users.length; i++) {

        if (data.users[i].userType == "Admin") {

          this.arrayOfAdmins.push(data.users[i]);


        }

      }
      console.log(this.arrayOfAdmins);
    })

  }

  removeUser(currenttype, type, id){


    let usertype = {
      currentType: currenttype,
      type: type,
      id: id

    }
    if(currenttype !== "Admin"){

      this.authservice.removeUser(usertype).subscribe(data=>{


          console.log(data)
                  this.authservice.getUsers().subscribe(data => {
          this.arrayOfAdmins = [];

          console.log(data)
          this.usersArray = data.users;
          for (let i = 0; i < data.users.length; i++) {

            if (data.users[i].userType == "Admin") {

              this.arrayOfAdmins.push(data.users[i]);


            }

          }
          console.log(this.arrayOfAdmins);

        })

      })

    }else{

      this.cannotRemoveAdmin = true;
setTimeout(()=>{

    this.cannotRemoveAdmin = false;
},4000)
    }


  }
  editUserType(currenttype, type, id) {

    console.log(type)
    console.log(id)
    console.log(this.arrayOfAdmins.length)
    let usertype = {
      currentType: currenttype,
      type: type,
      id: id

    }
    if (type == "User" && this.arrayOfAdmins.length > 1) {
      console.log(this.arrayOfAdmins.length);
      console.log("fcondition")
      this.authservice.editUserType(usertype).subscribe(data => {

        console.log(data);
        this.authservice.getUsers().subscribe(data => {
          this.arrayOfAdmins = [];

          console.log(data)
          this.usersArray = data.users;
          for (let i = 0; i < data.users.length; i++) {

            if (data.users[i].userType == "Admin") {

              this.arrayOfAdmins.push(data.users[i]);


            }

          }
          console.log(this.arrayOfAdmins);

        })

      })

    }
    if (type == "Admin" && this.arrayOfAdmins.length >= 0) {


      this.authservice.editUserType(usertype).subscribe(data => {

        console.log(data);
        this.authservice.getUsers().subscribe(data => {
          this.arrayOfAdmins = [];

          console.log(data)
          this.usersArray = data.users;
          for (let i = 0; i < data.users.length; i++) {

            if (data.users[i].userType == "Admin") {

              this.arrayOfAdmins.push(data.users[i]);


            }

          }
          console.log(this.arrayOfAdmins);

        })
      })
    }
    else{
    if(this.arrayOfAdmins[0]._id == id){


    this.thereMustBeOneAdmin =true;
        setTimeout(()=>{
  
  
          this.thereMustBeOneAdmin=false;
        },2000)
    }
    
  
  
      }
  
  }

}

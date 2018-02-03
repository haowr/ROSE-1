import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  usersArray:object[] =[];
  constructor(private authservice:AuthService) { }

  ngOnInit() {


    this.authservice.getUsers().subscribe(data=>{


      console.log(data)
      this.usersArray = data.users;

    })

  }
  editUserType(type,id){

    console.log(type)
    console.log(id)
    let usertype ={
      type: type,
      id: id

    }
    this.authservice.editUserType(usertype).subscribe(data=>{

      console.log(data);
          this.authservice.getUsers().subscribe(data=>{


      console.log(data)
      this.usersArray = data.users;

    })

    })
  }

}

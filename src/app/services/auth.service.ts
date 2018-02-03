import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';  //OBSERVABLE
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router'
import { Observable, Observer, Subject } from 'rxjs/Rx';
import { tokenNotExpired } from 'angular2-jwt';

@Injectable()
export class AuthService {

  authToken: any;
  user: any;
  public userName: any;
  public userType:any;
  isLoggedIn: boolean;
  public IsUserLoggedIn: Subject<boolean> = new Subject<boolean>();
  public userSubscribable: Subject<string> = new Subject<string>();
  constructor(private http: Http) { }

  removeUser(usertype){

        let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post('http://localhost:3000/routes/removeuser', usertype, { headers: headers })
      .map(res => res.json());

    

  }
  registerUser(user) {

    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post('http://localhost:3000/routes/register', user, { headers: headers })
      .map(res => res.json());

  }
  getUsers(){

    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.get('http://localhost:3000/routes/users',{headers:headers})
    .map(res => res.json())

  }
  editUserType(userinfo){

    let headers = new Headers();
    headers.append('Content-Type','application/json');
    return this.http.post('http://localhost:3000/routes/editusertype', userinfo,{headers:headers})
    .map(res => res.json())
  }
  authenticateUser(user) {

    let headers = new Headers();

    headers.append('Content-Type', 'application/json');
    return this.http.post('http://localhost:3000/routes/authenticate', user, { headers: headers })
      .map(res => {
        let result = res.json();

        if (result.success) {

          this.userName = result.user.name;
          this.userType = result.user.userType;
          console.log(result)
          this.userSubscribable.next(result.user.name);
          this.isLoggedIn = true;

        } else {

          res.json();

        }
        return result;

      })


  }
  storeUserData(token, user) {

    localStorage.setItem('id_token', token); //WHEN ANGULAR JWT VALIDATES THE TOKEN IT LOOKS FOR A PROPERTY NAMED...'ID_TOKEN""
    localStorage.setItem('user', JSON.stringify(user));
    this.authToken = token;
    this.user = user;
  }
  getUserData() {

    return this.userName;

  }
  checkIfLoggedIn() {

    console.log(this.userName)
    if (localStorage.getItem('user') && localStorage.getItem('id_token')) {

      let userObject = JSON.parse(localStorage.getItem('user'));
      this.userSubscribable.next(userObject.username);
      let shabo = "bolang";
      this.isLoggedIn = true

      let headers = new Headers();
      headers.append('Content-type', 'application/json');
      return this.http.put('http://localhost:3000/routes/getusername/' + userObject, { headers: headers })
        .map(res =>

          res.json());
    }
    else {

    }


  }
  loggedIn() {

    return tokenNotExpired('id_token');


  }
  logOut() {
    this.authToken = null;
    this.user = null;
    localStorage.clear();
  }
  loadToken() {

    const token = localStorage.getItem('id_token');
    this.authToken = token;
    //return this.authToken;

  }
  updateGlobalUsername(username) {

    this.userName = username;
    //return this.userName;

  }
  getClients() {

    let headers = new Headers();
    this.loadToken();
    headers.append('Authorization', this.authToken);
    headers.append('Content-Type', 'application/json');
    return this.http.get('http://localhost:3000/routes/getclients', { headers: headers })
      .map(res =>
        res.json());
  }
  storeUsername() {

    let headers = new Headers();
    this.loadToken();
    headers.append('Authorization', this.authToken);
    headers.append('Content-Type', 'application/json');
    return this.http.get('http://localhost:3000/routes/getclients', { headers: headers })
      .map(res => {
      
        this.userName = res[0].data.name;

      })

  }
}
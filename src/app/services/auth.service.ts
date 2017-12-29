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
  isLoggedIn: boolean;
  public IsUserLoggedIn: Subject<boolean> = new Subject<boolean>();
  public userSubscribable: Subject<string> = new Subject<string>();
  constructor(private http: Http) { }

  registerUser(user) {

    let headers = new Headers();
    console.log(user)
    headers.append('Content-Type', 'application/json');
    return this.http.post('routes/register', user, { headers: headers })
      .map(res => res.json());

  }
  authenticateUser(user) {

    let headers = new Headers();

    headers.append('Content-Type', 'application/json');
    return this.http.post('routes/authenticate', user, { headers: headers })
      .map(res => {
        let result = res.json();
        console.log(result);
        console.log(result.user.name);
        if (result.success) {
          this.userName = result.user.name;
          //this.userSubscribable = result.user.username;
          this.userSubscribable.next(result.user.name);
          console.log(this.userName);
          console.log(result.name);
          this.isLoggedIn = true;

        }
        return result;

      })

    //.do(value => console.log(value));


  }
  storeUserData(token, user) {

    localStorage.setItem('id_token', token); //WHEN ANGULAR JWT VALIDATES THE TOKEN IT LOOKS FOR A PROPERTY NAMED...'ID_TOKEN""
    localStorage.setItem('user', JSON.stringify(user));
    this.authToken = token;
    this.user = user;
  }
  getUserData(){

    return this.userName;

  }
  checkIfLoggedIn() {

    if (localStorage.getItem('user') && localStorage.getItem('id_token')) {

      console.log("We're Logged In!");
      let userObject = JSON.parse(localStorage.getItem('user'));
       this.userSubscribable.next(userObject.username);

      //this.userName = userObject.username;
      console.log(this.userName);
      console.log(userObject);
      let shabo = "bolang";
       this.isLoggedIn = true
      let headers = new Headers();
      headers.append('Content-type', 'application/json');
      return this.http.put('routes/getusername/' + userObject, { headers: headers })
        .map(res =>

          res.json());
      //console.log(res);
    }
    else {
      console.log("We'reNot!");
    }


  }
  loggedIn(){

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
    console.log(this.authToken);
    headers.append('Authorization',this.authToken);
    headers.append('Content-Type', 'application/json');
    return this.http.get('routes/getclients', { headers: headers })
      .map(res => 
        //console.log(res)
        res.json());
  }
  storeUsername(){

    let headers = new Headers();
    this.loadToken();
    headers.append('Authorization',this.authToken);
    headers.append('Content-Type', 'application/json');
    return this.http.get('routes/getclients',{ headers: headers})
    .map(res =>{
      console.log("hello")
      console.log(res[0].data.name);
      this.userName = res[0].data.name;

    })

  }
}
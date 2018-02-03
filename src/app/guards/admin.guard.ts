import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { AuthService} from '../services/auth.service';

@Injectable()
export class AdminGuard implements CanActivate {
  constructor(public authservice:AuthService){}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    return true;
  }
  ngOnInit(){
  
  console.log(this.authservice.user)
}
}
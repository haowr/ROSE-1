import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { AuthService} from '../services/auth.service';
import { Router } from '@angular/router'

@Injectable()
export class AdminGuard implements CanActivate {
  constructor(public authservice:AuthService, private router: Router){}
  canActivate(
   ) {
    if(this.authservice.loggedIn() && this.authservice.userType == "Admin"){


    return true;

    }else{

        this.router.navigate(['/login']);
        return false;
    }
  }
  ngOnInit(){
  
  console.log(this.authservice.user)
}
}
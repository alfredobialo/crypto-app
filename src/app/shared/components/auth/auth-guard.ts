import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import {Observable} from 'rxjs';
import {AuthenticatedUserContextService} from './i-current-user-context';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate{

  constructor(private userContext : AuthenticatedUserContextService, private routerInfo : Router) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot){
    const result = this.userContext.isAuthenticated();
    if(!result)
      this.routerInfo.navigate(["/login"])
    return result;
  }
}


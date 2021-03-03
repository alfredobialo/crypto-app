import {Observable, of} from 'rxjs';
import {delay, map} from 'rxjs/operators';

import {Injectable} from '@angular/core';

export interface ICurrentUserContext {
  getCurrentUser(): IUserModel | null;

  isAuthenticated(): boolean;

}

export interface IUserModel {
  userId: string;
  firstName: string;
  lastName: string;
  phoneNumber?: string;
  profilePictureUrl?: string;

}
@Injectable({providedIn:'root'})
export class AuthenticatedUserContextService implements ICurrentUserContext {
  private _isAuth : boolean = false;
  _currentUser : IUserModel | null = null;

  getCurrentUser(): IUserModel | null{
    return this._currentUser;
  }

  isAuthenticated(): boolean {
    return this._isAuth;
  }
  authenticateUser(userId : string, pwd : string) : Observable<IUserModel | null>{
    // Pretend to authenticate on a backend Auth Server API
    if((userId === "alfredobialo" && pwd === "password") || (userId === "admin" && pwd === "admin")){

      this._isAuth = true;
      if(userId === "admin"){
        return of( {
          userId : "admin",
          phoneNumber: "09080000099",
          firstName:"Kelechukwu",
          lastName:"Onyema"
        })
          .pipe(delay(4500), map( x => {
            console.log("Administrator : login Details ", x);
            this._currentUser = x;
            // log user to console for admin
            return x;
          }));
      }
      else{
        return of( {
          userId : "alfredobialo",
          phoneNumber: "08069273479",
          firstName:"Alfred",
          lastName:"Obialo"
        })
          .pipe(delay(1900), map( x => {
            this._currentUser = x;
            console.log("Alfred Obialo : login Details ", x); // log user to console for admin
            return x;
          }));
      }
    }
    return of(null);
  }

}

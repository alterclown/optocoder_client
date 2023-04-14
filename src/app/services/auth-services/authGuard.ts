import { Injectable } from '@angular/core';
import { 
  ActivatedRouteSnapshot, 
  CanActivate, 
  Router, 
  RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { map, take } from 'rxjs/operators';
import { AuthService } from './AuthService';



@Injectable()
export class AuthGuard implements CanActivate {
  // constructor(
  //   private authService: AuthService,
  //   private router: Router
  // ) {}

  // canActivate(
  //   next: ActivatedRouteSnapshot,
  //   state: RouterStateSnapshot
  // ): Observable<boolean> {
  //   return this.authService.isLoggedIn        // {1}
  //     .pipe(
  //       take(1),                              // {2} 
  //       map((isLoggedIn: boolean) => {         // {3}
  //         if (!isLoggedIn){
  //           this.router.navigate(['/login']);  // {4}
  //           return false;
  //         }
  //         return true;
  //       })
  //     )
  // }

  constructor(
    private router: Router,
    private authenticationService: AuthService
) { }

canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const currentUser = this.authenticationService.currentUserValue;
    if (currentUser) {
        // check if route is restricted by role
        if (route.data['roles'] && route.data['roles'].indexOf(currentUser.role) === -1) {
            // role not authorised so redirect to home page
            this.router.navigate(['/demo']);
            return false;
        }

        // authorised so return true
        return true;
    }

    // not logged in so redirect to login page with the return url
    this.router.navigate(['/login'], { queryParams: { returnUrl: state.url } });
    return false;
}
}
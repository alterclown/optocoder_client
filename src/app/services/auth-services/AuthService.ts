import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { User } from '../model/User';


@Injectable()
export class AuthService {
  // private loggedIn = new BehaviorSubject<boolean>(false); // {1}
  // loginObj = Observable<boolean>;

  // get isLoggedIn() {
  //   return this.loggedIn.asObservable(); // {2}
  // }

  // constructor(
  //   private router: Router
  // ) {}

  // login(user: User){
  //   if (user.userName !== '' && user.password !== '' ) { // {3}
  //     this.loggedIn.next(true);
  //     this.router.navigate(['/demo']);
  //   }
  // }

  // get isLoggedInLocalStorage():Observable<boolean> {
  //   const user = localStorage.getItem('user') as string;
  //   const userObj = JSON.parse(user);
  //   if (user){
  //     return of(true);
  //   }
  //   return of(false);
  // }

  // logout() {                            // {4}
  //   localStorage.removeItem("user");
  //   this.loggedIn.next(false);
  //   this.router.navigate(['/login']);
  // }

  private currentUserSubject: BehaviorSubject<User>;
  public currentUser: Observable<User>;

  constructor(private router: Router) {
      this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser') as string));
      this.currentUser = this.currentUserSubject.asObservable();
  }

  public get currentUserValue(): User {
      return this.currentUserSubject.value;
  }

  login(user: any) {
          if (user.username !== '' && user.password !== '' ) { // {3}
                 // store user details and jwt token in local storage to keep user logged in between page refreshes
                localStorage.setItem('currentUser', JSON.stringify(user));
                this.currentUserSubject.next(user);
                this.router.navigate(['/demo']);
              }
  }

  logout() {
      localStorage.clear();
       this.currentUserSubject.next(null);
       this.router.navigate(['/login']).then(() => {
        window.location.reload();
      });
  }
}
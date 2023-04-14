import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from './services/auth-services/AuthService';
import { User } from './services/model/User';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit  {
 
  title = 'optocoder_client';
  isLoggedIn$!: Observable<boolean>;
  currentUser:User

  constructor(private authService: AuthService) { 
    this.authService.currentUser.subscribe(x => this.currentUser = x);
  }

  ngOnInit() {
    // if (localStorage.getItem("user")){
    // }
    // this.isLoggedIn$ = this.authService.isLoggedIn;
    console.log('check value',this.isLoggedIn$);
    

  }

  onLogout() {
    this.authService.logout();
  }
}

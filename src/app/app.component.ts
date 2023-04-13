import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from './services/auth-services/AuthService';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit  {
 
  title = 'optocoder_client';
  isLoggedIn$!: Observable<boolean>;

  constructor(private authService: AuthService) { }

  ngOnInit() {
    // if (localStorage.getItem("user")){
    // }
    this.isLoggedIn$ = this.authService.isLoggedIn;
    console.log('check value',this.isLoggedIn$);
    

  }

  onLogout() {
    this.authService.logout();
  }
}

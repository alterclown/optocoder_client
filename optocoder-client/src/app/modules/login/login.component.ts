import {Router} from '@angular/router';
import {Component, OnInit} from '@angular/core';
import {Title} from '@angular/platform-browser';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css'],
})

export class LoginComponent implements OnInit {

    // public userName: string = '';
    // public password: string = '';
    // public userRoleId: number = 0;


    constructor(private title: Title,private router:Router) {
    }

    ngOnInit(): void {
        this.title.setTitle('Login | Vehicle Monitoring Admin Panel');
        // localStorage.setItem('Token', null);
        // localStorage.setItem('User', null);
    }

    onSubmit(){
        this.router.navigateByUrl('/home');
    }
}


import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth-services/AuthService';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form!: FormGroup ;
  private formSubmitAttempt: boolean | undefined;

  constructor(
    private fb: FormBuilder, 
    private authService: AuthService,
    private router:Router
  ) {}

  ngOnInit() {
    this.form = this.fb.group({   
      userName: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  

  onSubmit() {
    this.formSubmitAttempt = true;
    // this.router.navigateByUrl('/demo');   
    // authenticate user and get token
    // const token = 'abckddsafhadsjfhnjadsnfijads';
    const user = {
      UserId:1,
      UserName:"rahi",
      Token:'abckddsafhadsjfhnjadsnfijads'
    }
    localStorage.setItem('user', JSON.stringify(user));
    this.authService.login(this.form.value);       
  }
}

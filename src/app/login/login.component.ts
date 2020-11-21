
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router, Routes } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private authservice: AuthService , private routes: Router) { }
msg;
  ngOnInit(): void {
  }
  check(uname: string, pwd: string): void
  {
    const output = this.authservice.cheackusernamepassword(uname, pwd);
    if (output === true)
    {
      this.routes.navigate(['/dashboard']);
    }
    else{
this.msg = 'invalid login';
    }
  }

}

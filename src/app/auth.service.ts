import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }
  cheackusernamepassword(uname: string, pwd: string): any{
if (uname === 'subrat' && pwd === 'subrat13'){
localStorage.setItem('username', 'admin');
return true;
}else{
  return false;
}
  }
}

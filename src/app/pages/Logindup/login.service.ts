import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';

@Injectable()
export class LoginService {
  isLoggedIn: boolean;
  constructor(
    private http: Http, 
    public router: Router) {}

  login(username: String, password: String) {

    return this.http.post('/api/login', JSON.stringify({
        uname: username,
        pwd: password
      }), {  
        headers: new Headers({
          'Content-Type': 'application/json'
        })
      })
      .map((response : Response) => {
        let res = response.json();
        if (res.userid && res.token)
        {
          localStorage.setItem('currentUser', JSON.stringify(res));
          this.isLoggedIn = true;
        }
      });

    }
}

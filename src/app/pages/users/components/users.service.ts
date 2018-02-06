import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { User } from './user';

@Injectable()
export class UsersService {
  private usersUrl = '/api/addusers'; 
  private addusersUrl = 'http://0.0.0.0:5000/createUserProfile';  // URL to web api
  constructor(private http: Http) { }



  getUsers(): Promise<Array<User>> {
    return this.http.get(this.usersUrl, {headers: this.jwt()})
    .toPromise()
    .then(response => response.json().data as User[])
    .catch((err)=>this.handleError(err));
  }

  getUser(userid: number): Promise<User> {
    const url = `${this.usersUrl}/${userid}`;
    return this.http.get(url, {headers: this.jwt()})
               .toPromise()
               .then(response => response.json().data as User)
               .catch((err)=>this.handleError(err));
  }

  save(user: User): Promise<User> {
    if (user.userid) {
      return this.put(user);
    }
    return this.post(user);
  }

 /* delete(userid: number): Promise<void> {
    const url = `${this.usersUrl}/${userid}`;
    return this.http.delete(url, {headers: this.jwt()})
            .toPromise()
            .then(() => null)               
            .catch((err)=>this.handleError(err));
}*/

  // Add new User
create(user): Promise<User> {
   /*const data={"Userid":"1802", "FirstName": "reek", "LastName": "Hazard", "Contact": 6318201978, "Emailid" : "eden.hazard@stonybrook.com", "UserCategory" : "Student" }*/
  
  return this.http.post('localhost:5000/createUserProfile', JSON.stringify(this.user), {  
    headers: new Headers({
      'Content-Type': 'application/json'
    })
  }).toPromise()
  .then(res => res.json().data)
  console.log('recieved response')
  
}   


    /*return this.http
            .post(this.addusersUrl, JSON.stringify({Userid: '1234'}), {headers: this.jwt()})
            .toPromise()
            .then(res => res.json().data)
            .catch((err)=>this.handleError(err));*/




  // Update existing Hero
  
  modifyUser(user: User): Promise<User> {
    const url = `${this.usersUrl}/${user.userid}`;
    return this.http
               .put(url, JSON.stringify(user), {headers: this.jwt()})
               .toPromise()
               .then(() => user)
               .catch((err)=>this.handleError(err));
}  

private jwt() {
    let currentUser = JSON.parse(localStorage.getItem('currentUser'));
    if (currentUser && currentUser.token){
        return new Headers(
            {'Authorization': 'Bearer ' + currentUser.token,
            'Content-Type': 'application/json'});
    }
}


handleError(error: any) {
   console.error('An error occurred', error);
if (error.status == 401)
{
    alert(error.json()['message'])
    let currentUser = JSON.parse(localStorage.getItem('currentUser'));
    /*if(currentUser)
    {
        localStorage.removeItem('currentUser');
        this.authService.isLoggedIn = false;
    }
    this.authService.router.navigate(['/login']);*/
}
else
    return Promise.reject(error.message || error);
}
}
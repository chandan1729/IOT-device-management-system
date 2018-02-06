import { Component, OnInit, NgModule } from '@angular/core';
import { Router } from '@angular/router';
import {UsersService} from '../users.service'
import {User} from '../user';
import { FormGroupDirective } from '@angular/forms/src/directives/reactive_directives/form_group_directive';
import {FormsModule} from '@angular/forms';
import {BrowserModule} from '@angular/platform-browser';
import { Headers, Http, Response } from '@angular/http';
import {CORE_DIRECTIVES, FormBuilder, Control, ControlGroup, Validators} from '@angular/common';

import 'rxjs/add/operator/toPromise';


@Component({
  selector: 'add-users',
  styleUrls: ['./addusers.scss'],
  templateUrl: './addusers.html',
})
  

export class AddUsers {
  
  
  Userid: string;
  Firstname: string;
  Lastname: string;
  Emailid: string;
  Contact: string;
  Usercategory: string;
  selectedUser: User;
  addingUser = false;
  error: any;
  showNgFor = false;

  private addusersUrl = 'http://0.0.0.0:5000/createUserProfile'; 
  constructor(
    private router: Router,
    private usersService: UsersService,
    private http:Http
  ) {}

onSubmit(addUserForm): Promise<any> {
      //let data = JSON.stringify(user);
      console.log('you submitted value1:', addUserForm) 
      window.confirm('User added successfully.' )
      return this.http.post('http://0.0.0.0:5000/createUserProfile', JSON.stringify(addUserForm),{
        headers: new Headers({  
          'Content-Type': 'application/json'
        })  
      }).toPromise()
      
      .then(response => response.json().addUserForm)
      
     
      
} 

  




  /*this.http.post('localhost:5000/createUserProfile', data)
      .subscribe(
        data => alert('Your account has been created!'),
        error => alert(error.json().message)
      );
  }*/
      
      
    /*getUsers(): void {
    this.usersService
      .getUsers()
      .then(users => this.users = users)
      .catch(error => this.error = error);
  }

  

 

  ngOnInit(): void {
    this.getUsers();
  }

  onSelect(user: User): void {
    this.selectedUser = user;
    this.addingUser = false;
  }*/

  /*onSubmit() {
    this.authService.login(this.uname, this.pwd).subscribe(() => {
      if (this.authService.isLoggedIn) {
        this.router.navigate([this.returnUrl]);
      }
      else
      {
        this.message = 'Login failed! Try again';
      }
    });
  }*/
  /*gotoDevices(): void {
    this.router.navigate(['/accesibledevices', this.selectedUser.usercategory]);
  }*/
}

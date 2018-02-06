import { Component, OnInit, NgModule } from '@angular/core';
import { Router } from '@angular/router';


import { FormGroupDirective } from '@angular/forms/src/directives/reactive_directives/form_group_directive';
import {FormsModule} from '@angular/forms';
import {BrowserModule} from '@angular/platform-browser';
import { Headers, Http, Response } from '@angular/http';
//import {CORE_DIRECTIVES, FormBuilder, Control, ControlGroup, Validators} from '@angular/common';

import 'rxjs/add/operator/toPromise';

@Component({
  selector: 'add-devices',
  templateUrl: './adddevices.html',
})
export class AddDevices {
  Deviceid: string;
  DeviceName: string;
  DeviceLocation: string;
  AccesibleTo: string;
  AccessPermission: string;
  Usercategory: string;
 
  addingUser = false;
  error: any;
  showNgFor = false;

  private addusersUrl = 'http://0.0.0.0:5000/createUserProfile'; 

  constructor(private router: Router,
    private http:Http) {
  }

  isChecked: boolean = false;




  onSubmit(addDeviceForm): Promise<any> {
      //let data = JSON.stringify(user);
      console.log('you submitted value1:', addDeviceForm) 
      
      
      return this.http.post('http://0.0.0.0:5000/createDeviceProfile', JSON.stringify(addDeviceForm,),{
        headers: new Headers({  
          'Content-Type': 'application/json'          
        })  
      }).toPromise()
      
      .then(response => response.json().addDeviceForm);
      
     
      

    }

    

      
    
      
     



}

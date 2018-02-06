import 'style-loader!./smartTables.scss';

import { Component, OnInit } from '@angular/core';


import{Ng2SmartTableModule} from 'ng2-smart-table';
import {ServerDataSource, LocalDataSource} from 'ng2-smart-table';

import {Headers, Http, Response} from '@angular/http';
/*import { CustomEditorComponent } from './custom-editor.component';
import { CustomRenderComponent } from './custom-render.component';
import {LinkRenderComponent} from './link-render.component';*/

import 'style-loader!./smartTables.scss';



@Component({
  selector: 'smart-tables',
  templateUrl: './smartTables.html',
})
export class SmartTables {
  

  query: string = '';

  settings = {
    /*add: {
      addButtonContent: '<i class="ion-ios-plus-outline"></i>',
      createButtonContent: '<i class="ion-checkmark"></i>',
      cancelButtonContent: '<i class="ion-close"></i>',
    },*/
    edit: {
      editButtonContent: '<i class="ion-edit"></i>',
      saveButtonContent: '<i class="ion-checkmark"></i>',
      cancelButtonContent: '<i class="ion-close"></i>',
      confirmSave: true
    },
    delete: {
      deleteButtonContent: '<i class="ion-trash-a"></i>',
      confirmDelete: true
    },
    columns: {
      Deviceid: {
        title: 'DeviceID',
        type: 'link',
      },
      DeviceName: {
        title: 'Device',
        
      },
      DeviceLocation: {
        title: 'Location',
        
      },
      AccessPermission: {
        title: 'Accesibleto',
        
      },
      Status: {
        title: 'Device Status',
        
      }
    }
  };

  public source: ServerDataSource; 
  
    constructor(
                public http: Http) {
                  this.source = new ServerDataSource(http, { endPoint: "http://0.0.0.0:5000/displaydevices" }); 
                console.log(ServerDataSource)}

    onDeleteConfirm(event): void {
      console.log(event)
      if (window.confirm('Are you sure you want to delete?')) {
        event.confirm.resolve(
          this.http.delete(`${'http://0.0.0.0:5000/deletedevice'}/${event.data.Deviceid}`,{
            headers: new Headers({  
              'Content-Type': 'application/json'
            })  
          }).toPromise()
          .then(() => null));
          console.log('deleted data', event.newData)
          window.confirm('Device deleted successfully.' )
      } else {
        event.confirm.reject();
        window.confirm('Device delete action revoked.' )
      }
    }
                
                
                
onSaveConfirm(event) {
  if (window.confirm('Are you sure you want to save?')) {
    console.log(event.data)
    let a = JSON.stringify(event.data)
    console.log(a);
    event.confirm.resolve(
      this.http.post(`${'http://0.0.0.0:5000/modifyDeviceProfile'}/${event.data.Deviceid}`, JSON.stringify(event.newData),{
      headers: new Headers({  
        'Content-Type': 'application/json'
      })  
    }).toPromise()
    .then(response => response.json().data));
    console.log(event.newData)
   
    window.confirm('Device details updated successfully!')
    
  }
  else
  {
    event.confirm.reject();
    window.confirm('Device update action revoked.' )
  }

            
                     
     
  
  
  
} 
}

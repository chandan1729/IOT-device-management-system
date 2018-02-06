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
  selector: 'other-category',
  templateUrl: './othercategory.html',
})
export class OtherCategory {
  

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
      deviceid: {
        title: 'DeviceID',
        type: 'link',
      },
      deviceName: {
        title: 'Device',
        
      },
      deviceLocation: {
        title: 'Location',
        
      },
      status: {
        title: 'Status',
      }
    }
  };
  smartTableData = [
    {
      deviceid: 1000,
      deviceName: 'Lighting Control',
      deviceLocation: 'SAC First floor, Room No 100',
      status: 'Active'
    },
    {
      deviceid: 1004,
      deviceName: 'Main Door-1',
      deviceLocation: 'SAC First floor, Room No 100',
      status: 'Active'
    },
    {
      deviceid: 1005,
      deviceName: 'Main Door-2',
      deviceLocation: 'SAC First floor, Room No 100',
      status: 'Active'
    },
    {
      deviceid: 1006,
      deviceName: 'Air Conditioning',
      deviceLocation: 'SAC First floor, Room No 100',
      status: 'Active'
    },
    {
      deviceid: 1007,
      deviceName: 'Food & Coffee Vending Machine',
      deviceLocation: 'SAC First floor',
      status: 'Active'
    },
    {
      deviceid: 1014,
      deviceName: 'Coffee Vending Machine',
      deviceLocation: 'Frey Hall, Fisrt Floor',
      status: 'Active'
    },
    
    
    {
      deviceid: 1045,
      deviceName: 'Main Door-1',
      deviceLocation: 'Maintainance Room, Frey Hall, Ground Floor',
      status: 'Active'
    },
    {
      deviceid: 1046,
      deviceName: 'Main Door-2',
      deviceLocation: 'Maintainance Room, Frey Hall, Ground Floor',
      status: 'Active'
    },
    {
      deviceid: 1047,
      deviceName: 'Lighting Control',
      deviceLocation: 'Maintainance Room, Frey Hall, Ground Floor',
      status: 'Active'
    },
    {
      deviceid: 1048,
      deviceName: 'Air Conditioning',
      deviceLocation: 'Maintainance Room, Frey Hall, Ground Floor',
      status: 'Active'
    },
    
  ];


  source: LocalDataSource = new LocalDataSource();
  
   
      
  onDeleteConfirm(event): void {
    {
     window.confirm('Oops! Looks like you can not do that here.')
     event.confirm.resolve();
   
   }
 }

 onSaveConfirm(event): void {
   {
    window.confirm('Oops! Looks like you can not edit here.')
    event.confirm.resolve();
  
  }
}
  }
  
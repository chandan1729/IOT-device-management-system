import 'style-loader!./smartTables.scss';

import { Component, OnInit } from '@angular/core';

import { SmartTablesService } from './smartTables.service';
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
      deviceid: '1000',
      deviceName: 'Lighting Control',
      deviceLocation: 'SAC First floor, Room No 100',
      status: 'Active'
    },
    {
      deviceid: '1001',
      deviceName: 'Xerox Machine',
      deviceLocation: 'SAC 1st Floor',
      status: 'Active'
    },
    {
      deviceid: '1004',
      deviceName: 'Main Door-1',
      deviceLocation: 'SAC First floor, Room No 100',
      status: 'Active'
    },
    {
      deviceid: '1005',
      deviceName: 'Main Door-2',
      deviceLocation: 'SAC First floor, Room No 100',
      status: 'Active'
    },
    {
      deviceid: '1006',
      deviceName: 'Air Conditioning',
      deviceLocation: 'SAC First floor, Room No 100',
      status: 'Active'
    },
    {
      deviceid: '1007',
      deviceName: 'Food & Coffee Vending Machine',
      deviceLocation: 'SAC First floor',
      status: 'Active'
    },
    {
      deviceid: '1008',
      deviceName: 'Wolfie Bike Ride',
      deviceLocation: 'Sac Bus Stop',
      status: 'Active'
    },
    {
      deviceid: '1014',
      deviceName: 'Coffee Vending Machine',
      deviceLocation: 'Frey Hall, Fisrt Floor',
      status: 'Active'
    },
    {
      deviceid: '1031',
      deviceName: 'Copy Machine',
      deviceLocation: 'NCS, Room No 301',
      status: 'Out Of Order'
    },
    
    {
      deviceid: '1036',
      deviceName: 'Copy Machine-1',
      deviceLocation: 'Melville Library, Ground Floor',
      status: 'Under Maintainance'
    },
    {
      deviceid: '1037',
      deviceName: 'Copy Machine-2',
      deviceLocation: 'Melville Library, Ground Floor',
      status: 'Under Maintainance'
    },
    {
      deviceid: '1038',
      deviceName: 'Copy Machine-3',
      deviceLocation: 'Melville Library, Ground Floor',
      status: 'Under Maintainance'
    },
    {
      deviceid: '1039',
      deviceName: 'Copy Machine-4',
      deviceLocation: 'Melville Library, Ground Floor',
      status: 'Out Of Order'
    },
    {
      deviceid: '1040',
      deviceName: 'Copy Machine-5',
      deviceLocation: 'Melville Library, Ground Floor',
      status: 'Out Of Order'
    },
    {
      deviceid: '1041',
      deviceName: 'Copy Machine-6',
      deviceLocation: 'Melville Library, Ground Floor',
      status: 'Active'
    },
    {
      deviceid: '1042',
      deviceName: 'Copy Machine-7',
      deviceLocation: 'Melville Library, Ground Floor',
      status: 'Active'
    },
    {
      deviceid: '1043',
      deviceName: 'Projector',
      deviceLocation: 'Melville Library, Room 001',
      status: 'Active'
    }, 
    {
      deviceid: '1044',
      deviceName: 'Projector',
      deviceLocation: 'Melville Library, Room 002',
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
  
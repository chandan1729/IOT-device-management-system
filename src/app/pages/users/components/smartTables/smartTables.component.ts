import { Component, OnInit } from '@angular/core';

import { SmartTablesService } from './smartTables.service';
import{Ng2SmartTableModule} from 'ng2-smart-table';
import {UsersService} from '../users.service';

import {ServerDataSource, LocalDataSource} from 'ng2-smart-table';

import {Headers, Http, Response} from '@angular/http';
import { CustomEditorComponent } from './custom-editor.component';
import { CustomRenderComponent } from './custom-render.component';
import {LinkRenderComponent} from './link-render.component';

import 'style-loader!./smartTables.scss';



@Component({
  selector: 'smart-tables',
  templateUrl: './smartTables.html',
})
export class SmartTables {
  declarations: [ CustomEditorComponent, CustomRenderComponent, LinkRenderComponent ]

  
  
  
    
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
      Userid: {
        title: 'UserID',
        editable: false,
        
      }, 
      FirstName: {
        title: 'First Name',
        
      },
      LastName: {
        title: 'Last Name',
        
      },
      Contact: {
        title: 'Contact',
       
      },
      Emailid: {
        title: 'E-mail',
        
      },
      
      UserCategory: {
        title: 'User Category',
        editable: false,
        
      },
   },
  };
  
  
  
  public source: ServerDataSource; 

  constructor(protected service: SmartTablesService,
              public http: Http) {
                this.source = new ServerDataSource(http, { endPoint: "http://0.0.0.0:5000/displayusers" }); 
    
  //console.log('new', this.data["0"])
}


  
  

   


  /*static DATA_SIZE = 500;
  
    
      protected generateData(): Array<any> {
        
        for (let i = 0; i < SmartTablesService.DATA_SIZE; i++) {
          data.push(data);
          console.log(data);
        }
        return data;
        
  
      }*/
    
  
  /*JSONArray result = new JSONArray(user);
  // RETRIEVE EACH JSON OBJECT'S FIELDS
  String result = result.getString("userid");
  String firstname = result.getString("firstname");
  String secondname = result.getString("secondname");
  String usercategory = result.getString("usercategory");
  String email = result.getString("email");
  String contact = result.getString("contact");*/
 

  // CONVERT DATA FIELDS TO CLUB OBJECT
  /*Club c = new Club(iuserid, firstname, secondname, usercategory, email, contact);
  ret.add(c);*/

  
  /*delete(userid: number): Promise<void> {
    const url = `${'http://0.0.0.0:5000/deleteuser'}/${row.Userid}`;
    return this.http.delete(url, {headers: new Headers({  
      'Content-Type': 'application/json'
    })  
  }).toPromise()
  .then(() => null)  */


  
  /*ngOnInit(): void {
    const data = [];
          this.smarttablesservice.getUsers()
      .then((data) => {
        
         this.source.load(data);
         this.source.push(data);
         console.log(data);
       });
     }  
  }*/
  
  onDeleteConfirm(event): void {
    console.log(event)
    if (window.confirm('Are you sure you want to delete?')) {
      event.confirm.resolve(
        this.http.delete(`${'http://0.0.0.0:5000/deleteuser'}/${event.data.Userid}`,{
          headers: new Headers({  
            'Content-Type': 'application/json'
          })  
        }).toPromise()
        .then(() => null));
        console.log('deleted data', event.newData)
        window.confirm('User deleted successfully.' )
    } else {
      event.confirm.reject();
      window.confirm('User delete action revoked.' )
    }
  }



  onSaveConfirm(event) {
    if (window.confirm('Are you sure you want to save?')) {
      console.log(event.data)
      let a = JSON.stringify(event.data)
      console.log(a);
      event.confirm.resolve(
       this.http.post(`${'http://0.0.0.0:5000/modifyUserProfile'}/${event.data.Userid}`, JSON.stringify(event.newData),{
        headers: new Headers({  
          'Content-Type': 'application/json'
        })  
      }).toPromise()
      .then(response => response.json().data));
      console.log(response)
      console.log(event.newData)
      window.confirm('User updated successfully!')
    }
    else
    {
      event.confirm.reject();
      window.confirm('User update action revoked.' )
    }
  }
      /*event.newData['name'] += ' + added in code';
      event.confirm.resolve(event.newData);
  
      console.log(event.newData)
    } else {
      event.confirm.reject();
    }
  }

  /*modifyUser(user: User): Promise<User> {
    const url = `${this.usersUrl}/${user.userid}`;
    return this.http
               .put(url, JSON.stringify(user), {headers: this.jwt()})
               .toPromise()
               .then(() => user)
               .catch((err)=>this.handleError(err));
   } */
  
  /*modifyuser(data): Promise<any> {
    //let data = JSON.stringify(user);
    console.log('you submitted value1:', data) 
    return this.http.post('http://0.0.0.0:5000/modifyUserProfile', JSON.stringify(data),{
      headers: new Headers({  
        'Content-Type': 'application/json'
      })  
    }).toPromise()
    .then(response => response.json().data)
  }
 


*/

}

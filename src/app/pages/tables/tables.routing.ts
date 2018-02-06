import { Routes, RouterModule }  from '@angular/router';

import { SmartTables } from './components/smartTables';

import {FacultyCategory} from './components/facultycategory';
import {OtherCategory} from './components/othercategory';

import { Tables } from './tables.component';


// noinspection TypeScriptValidateTypes
const routes: Routes = [
  {
    path: '',
    component: Tables,
    children: [
     /* { path: 'facultycategory', component: FacultyCategory },*/
     
      { path: 'smartTables', component: SmartTables },
      { path: 'facultycategory', component: FacultyCategory },
      { path: 'othercategory', component: OtherCategory }
    /*  { path: 'othercategory', component: OtherCategory }*/

      
    ]
  }
];

export const routing = RouterModule.forChild(routes);

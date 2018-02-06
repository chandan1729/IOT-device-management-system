import { Routes, RouterModule }  from '@angular/router';

import { Users } from './users.component';
/*import { Inputs } from './components/inputs/inputs.component';
import { Layouts } from './components/layouts/layouts.component';
import { FormioPage } from './components/formio/formio.component';*/
import { AddUsers } from './components/addusers/addusers.component';
import { DeleteUsers } from './components/deleteusers/deleteusers.component';
/*import { ResponsiveTable } from './components/responsiveTable/responsiveTable.component';*/
import { SmartTables } from './components/smartTables/smartTables.component';



// noinspection TypeScriptValidateTypes
const routes: Routes = [
  {
    path: '',
    component: Users,
    children: [
      /*{ path: 'inputs', component: Inputs },
      { path: 'layouts', component: Layouts },
      { path: 'formio', component: FormioPage },*/
      { path: 'addusers', component: AddUsers },
      { path: 'deleteusers', component: DeleteUsers },
      { path: 'smartTables', component: SmartTables }
    ]
  }
];

export const routing = RouterModule.forChild(routes);

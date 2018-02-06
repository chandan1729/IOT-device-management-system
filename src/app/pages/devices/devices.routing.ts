import { Routes, RouterModule }  from '@angular/router';

import { Devices } from './devices.component';
/*import { Inputs } from './components/inputs/inputs.component';
import { Layouts } from './components/layouts/layouts.component';
import { FormioPage } from './components/formio/formio.component';*/
import { AddDevices } from './components/adddevices/adddevices.component';

/*import { ResponsiveTable } from './components/responsiveTable/responsiveTable.component';*/
import { SmartTables } from './components/smartTables/smartTables.component';



// noinspection TypeScriptValidateTypes
const routes: Routes = [
  {
    path: '',
    component: Devices,
    children: [
      /*{ path: 'inputs', component: Inputs },
      { path: 'layouts', component: Layouts },
      { path: 'formio', component: FormioPage },*/
      { path: 'adddevices', component: AddDevices },
    
      { path: 'smartTables', component: SmartTables }
    ]
  }
];

export const routing = RouterModule.forChild(routes);

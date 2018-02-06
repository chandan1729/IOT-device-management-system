import { Routes, RouterModule }  from '@angular/router';
import { Pages } from './pages.component';
import { ModuleWithProviders } from '@angular/core';
// noinspection TypeScriptValidateTypes

// export function loadChildren(path) { return System.import(path); };

export const routes: Routes = [
  {
    path: 'login',
    loadChildren: 'app/pages/login/login.module#LoginModule'
  },
  {
    path: 'register',
    loadChildren: 'app/pages/register/register.module#RegisterModule'
  },
  {
    path: 'pages',
    component: Pages,
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'home', loadChildren: 'app/pages/home/home.module#HomeModule' },
      { path: 'users', loadChildren: 'app/pages/users/users.module#UsersModule' },
      { path: 'devices', loadChildren: 'app/pages/devices/devices.module#DevicesModule' },
      { path: 'settings', loadChildren: 'app/pages/settings/settings.module#SettingsModule' },
      /*{ path: 'tables', loadChildren: 'app/pages/devices/devices.module#DevicesModule' },*/
      /*{ path: 'forms', loadChildren: 'app/pages/forms/forms.module#FormsModule' },*/
     { path: 'tables', loadChildren: 'app/pages/tables/tables.module#TablesModule' },
      /*{ path: 'maps', loadChildren: 'app/pages/maps/maps.module#MapsModule' }*/
    ]
  }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);

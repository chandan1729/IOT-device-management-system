import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgaModule } from '../../theme/nga.module';
import { Ng2SmartTableModule } from 'ng2-smart-table';

import { routing }       from './tables.routing';
import { Tables } from './tables.component';



import { SmartTables } from './components/smartTables/index';
import {FacultyCategory} from './components/facultycategory';
import {OtherCategory} from './components/othercategory';

/*import{OtherCategory} from './components/Others';*/

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NgaModule,
    routing,
    Ng2SmartTableModule
    

  ],
  declarations: [
    Tables,
    SmartTables,
    FacultyCategory,
    OtherCategory
    
   
    
  ],
  providers: [
    
    
    
  ]
})
export class TablesModule {
}

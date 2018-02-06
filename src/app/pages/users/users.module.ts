import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';
import { FormsModule as AngularFormsModule } from '@angular/forms';
import { Ng2SmartTableModule } from 'ng2-smart-table';

import { NgaModule } from '../../theme/nga.module';

import { routing }       from './users.routing';


import { Users } from './users.component';
import { Inputs } from './components/inputs';
import { Layouts } from './components/layouts';
import { AddUsers } from './components/addusers';
import { DeleteUsers } from './components/deleteusers';
import { SmartTables } from './components/smartTables';

import { StandardInputs } from './components/inputs/components/standardInputs';
import { ValidationInputs } from './components/inputs/components/validationInputs';
import { GroupInputs } from './components/inputs/components/groupInputs';
import { CheckboxInputs } from './components/inputs/components/checkboxInputs';
/*import { Rating } from './components/inputs/components/ratinginputs';*/
import { SelectInputs } from './components/inputs/components/selectInputs';
import { SmartTablesService } from './components/smartTables/smartTables.service';
import{UsersService} from './components/users.service';


import { InlineForm } from './components/layouts/components/inlineForm';
import { BlockForm } from './components/layouts/components/blockForm';
import { HorizontalForm } from './components/layouts/components/horizontalForm';
import { BasicForm } from './components/layouts/components/basicForm';
import { WithoutLabelsForm } from './components/layouts/components/withoutLabelsForm';

@NgModule({
  imports: [
    CommonModule,
    AngularFormsModule,
    NgaModule,
    Ng2SmartTableModule,
    routing
  ],
  declarations: [
    Layouts,
    Inputs,
    Users,
    AddUsers,
    DeleteUsers,
    SmartTables,
    StandardInputs,
    ValidationInputs,
    GroupInputs,
    CheckboxInputs,
    /*Rating,*/
    SelectInputs,
    InlineForm,
    BlockForm,
    HorizontalForm,
    BasicForm,
    WithoutLabelsForm
  ],
  providers: [

    SmartTablesService,
    UsersService
  ]
})
export class UsersModule {
}

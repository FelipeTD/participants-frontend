import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AppMaterialModule } from '../shared/app-material/app-material.module';
import { SharedModule } from '../shared/shared.module';

import { ParticipantsRoutingModule } from './participants-routing.module';
import { ParticipantsComponent } from './containers/participants/participants.component';
import { ParticipantFormComponent } from './containers/participant-form/participant-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ParticipantListComponent } from './components/participant-list/participant-list.component';


@NgModule({
  declarations: [
    ParticipantsComponent,
    ParticipantFormComponent,
    ParticipantListComponent
  ],
  imports: [
    CommonModule,
    ParticipantsRoutingModule,
    AppMaterialModule,
    SharedModule,
    ReactiveFormsModule
  ]
})
export class ParticipantsModule { }

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AppMaterialModule } from '../shared/app-material/app-material.module';
import { SharedModule } from '../shared/shared.module';

import { ParticipantsRoutingModule } from './participants-routing.module';
import { ParticipantsComponent } from './participants/participants.component';
import { ParticipantFormComponent } from './participant-form/participant-form.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ParticipantsComponent,
    ParticipantFormComponent
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

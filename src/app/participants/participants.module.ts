import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AppMaterialModule } from '../shared/app-material/app-material.module';
import { SharedModule } from '../shared/shared.module';

import { ParticipantsRoutingModule } from './participants-routing.module';
import { ParticipantsComponent } from './participants/participants.component';


@NgModule({
  declarations: [
    ParticipantsComponent
  ],
  imports: [
    CommonModule,
    ParticipantsRoutingModule,
    AppMaterialModule,
    SharedModule
  ]
})
export class ParticipantsModule { }

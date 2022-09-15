import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ParticipantFormComponent } from './participant-form/participant-form.component';

import { ParticipantsComponent } from './participants/participants.component';

const routes: Routes = [
  { path: '', component: ParticipantsComponent },
  { path: 'new', component: ParticipantFormComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ParticipantsRoutingModule { }

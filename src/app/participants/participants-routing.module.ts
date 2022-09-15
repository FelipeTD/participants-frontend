import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ParticipantFormComponent } from './containers/participant-form/participant-form.component';

import { ParticipantsComponent } from './containers/participants/participants.component';
import { ParticipantResolver } from './guards/participant.resolver';

const routes: Routes = [
  { path: '', component: ParticipantsComponent },
  { path: 'new', component: ParticipantFormComponent, resolve: { participant: ParticipantResolver } },
  { path: 'edit/:id', component: ParticipantFormComponent, resolve: { participant: ParticipantResolver } }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ParticipantsRoutingModule { }

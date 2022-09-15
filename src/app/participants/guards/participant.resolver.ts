import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { Participant } from '../model/participant';
import { ParticipantsService } from '../services/participants.service';

@Injectable({
  providedIn: 'root'
})
export class ParticipantResolver implements Resolve<Participant> {

  constructor(private service: ParticipantsService) {

  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Participant> {
    if (route.params && route.params['id']) {
      this.service.loadById(route.params['id']);
    }
    
    return of({
      code: null,
      externalCode: null,
      name: '',
      cpf: '',
      phone: '',
      assign: false,
      status: false
    });
  }
}

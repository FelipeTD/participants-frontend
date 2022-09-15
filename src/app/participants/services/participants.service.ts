import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Participant } from '../model/participant';
import { delay, first, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ParticipantsService {

  private readonly API = '/assets/participants.json';

  constructor(private httpClient: HttpClient) { }

  list() {
    return this.httpClient.get<Participant[]>(this.API)
    .pipe(
      first(),
      delay(2000),
      tap(participants => console.log(participants))
    );
  }

}

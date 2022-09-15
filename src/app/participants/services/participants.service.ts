import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Participant } from '../model/participant';
import { delay, first, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ParticipantsService {

  private readonly API = 'api/participant';

  constructor(private httpClient: HttpClient) { }

  list() {
    return this.httpClient.get<Participant[]>(this.API)
    .pipe(
      first(),
      delay(1000),
      tap(participants => console.log(participants))
    );
  }

}

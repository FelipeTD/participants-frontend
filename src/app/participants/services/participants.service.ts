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

  loadById(id: number | null) {
    return this.httpClient.get<Participant>(`${this.API}/${id}`);
  }

  save(record: Partial<Participant>) {
    if (record.code) {
      return this.update(record);
    }
    return this.create(record);
  }

  private create(record: Partial<Participant>) {
    return this.httpClient.post<Participant>(this.API, record)
    .pipe(
      first()
    );
  }

  private update(record: Partial<Participant>) {
    return this.httpClient.put<Participant>(`${this.API}/${record.code}`, record)
    .pipe(
      first()
    );
  }

  remove(id: number | null) {
    return this.httpClient.delete(`${this.API}/${id}`).pipe(first());
  }

}

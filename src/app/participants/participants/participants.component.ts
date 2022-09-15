import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { catchError, Observable, of } from 'rxjs';
import { ErrorDialogComponent } from 'src/app/shared/components/error-dialog/error-dialog.component';
import { Participant } from '../model/participant';
import { ParticipantsService } from '../services/participants.service';

@Component({
  selector: 'app-participants',
  templateUrl: './participants.component.html',
  styleUrls: ['./participants.component.scss']
})
export class ParticipantsComponent implements OnInit {

  participants$: Observable<Participant[]>;
  displayedColumns = ['code', 'externalCode', 'name', 'cpf', 'phone', 'assign', 'status'];

  // participantService: ParticipantsService;

  constructor(
    private participantService: ParticipantsService,
    public dialog: MatDialog
  ) {
    // this.participants = [];
    // this.participantService = new ParticipantsService();
    this.participants$ = this.participantService.list()
    .pipe(
      catchError(error => {
        this.onError('Erro ao carregar participantes.');
        return of([])
      })
    );
  }

  onError(errorMsg: string) {
    this.dialog.open(ErrorDialogComponent, {
      data: errorMsg
    });
  }

  ngOnInit(): void {
  }

}
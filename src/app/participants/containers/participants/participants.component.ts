import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { catchError, Observable, of } from 'rxjs';
import { ErrorDialogComponent } from 'src/app/shared/components/error-dialog/error-dialog.component';
import { Participant } from '../../model/participant';
import { ParticipantsService } from '../../services/participants.service';

@Component({
  selector: 'app-participants',
  templateUrl: './participants.component.html',
  styleUrls: ['./participants.component.scss']
})
export class ParticipantsComponent implements OnInit {

  participants$: Observable<Participant[]>;

  // participantService: ParticipantsService;

  constructor(
    private participantService: ParticipantsService,
    public dialog: MatDialog,
    private router: Router,
    private route: ActivatedRoute,
    private snackBar: MatSnackBar
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

  refresh() {
    this.participants$ = this.participantService.list()
      .pipe(
        catchError(error => {
          this.onError('Erro ao carregar participantes.');
          return of([])
        })
      )
  }

  onError(errorMsg: string) {
    this.dialog.open(ErrorDialogComponent, {
      data: errorMsg
    });
  }

  ngOnInit(): void {
  }

  onAdd() {
    this.router.navigate(['new'], { relativeTo: this.route });
  }

  onEdit(participant: Participant) {
    this.router.navigate(['edit', participant.code], { relativeTo: this.route });
  }

  onRemove(participant: Participant) {
    this.participantService.remove(participant.code).subscribe(
      () => {
        this.refresh();
        this.snackBar.open('Participante removido com sucesso!', 'X', {
          duration: 1000,
          verticalPosition: 'top',
          horizontalPosition: 'center'
        })
      },
      () => this.onError('Erro ao tentar remover participante')
    );
  }

}

import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ParticipantsService } from '../../services/participants.service';

@Component({
  selector: 'app-participant-form',
  templateUrl: './participant-form.component.html',
  styleUrls: ['./participant-form.component.scss']
})
export class ParticipantFormComponent implements OnInit {

  form = this.formBuilder.group({
    code: new FormControl<number | null>(null),
    externalCode: new FormControl<number | null>(null),
    name: new FormControl<string>('', { nonNullable: true }),
    cpf: new FormControl<string>('', { nonNullable: true }),
    phone: new FormControl<string>('', { nonNullable: true }),
    assign: new FormControl<boolean>(false, { nonNullable: true }),
    status: new FormControl<boolean>(false, { nonNullable: true })
  });

  constructor(private formBuilder: FormBuilder, 
    private service: ParticipantsService, 
    private snackBar: MatSnackBar,
    private location: Location) {
    this.form
  }

  ngOnInit(): void {
  }

  onSubmit() {
    this.service.save(this.form.value)
      .subscribe({
        next: result => this.onSuccess(),
        error: error => this.onError(),
        complete: () => console.info('complete')
      });
  }

  onCancel() {
    this.location.back();
  }

  private onSuccess() {
    this.snackBar.open('Participante adicionado com sucesso!', '', { duration: 3000 });
    this.onCancel();
  }

  private onError() {
    this.snackBar.open('Erro ao adicionar participante', '', { duration: 3000 });
  }

}

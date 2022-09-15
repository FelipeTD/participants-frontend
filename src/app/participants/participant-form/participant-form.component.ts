import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ParticipantsService } from '../services/participants.service';

@Component({
  selector: 'app-participant-form',
  templateUrl: './participant-form.component.html',
  styleUrls: ['./participant-form.component.scss']
})
export class ParticipantFormComponent implements OnInit {

  form: UntypedFormGroup;

  constructor(private formBuilder: UntypedFormBuilder, 
    private service: ParticipantsService, 
    private snackBar: MatSnackBar,
    private location: Location) {
    this.form = this.formBuilder.group({
      code: [null],
      externalCode: [null],
      name: [null],
      cpf: [null],
      phone: [null],
      assign: [false],
      status: [false]
    });
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

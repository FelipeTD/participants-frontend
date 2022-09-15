import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Participant } from '../../model/participant';

@Component({
  selector: 'app-participant-list',
  templateUrl: './participant-list.component.html',
  styleUrls: ['./participant-list.component.scss']
})
export class ParticipantListComponent implements OnInit {

  @Input() participants: Participant[] = [];
  @Output() add = new EventEmitter(false);
  @Output() edit = new EventEmitter(false);

  readonly displayedColumns = ['code', 'externalCode', 'name', 'cpf', 'phone', 'assign', 'status', 'actions'];

  constructor() { }

  ngOnInit(): void {
  }

  onAdd() {
    this.add.emit(true);
  }

  onEdit(participant: Participant) {
    this.edit.emit(participant);
  }

}

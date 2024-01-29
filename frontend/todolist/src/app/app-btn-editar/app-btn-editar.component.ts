import { Component, EventEmitter, Input, OnInit, Output, TemplateRef } from '@angular/core';
import { Card } from '../model/card.model';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-btn-editar',
  templateUrl: './app-btn-editar.component.html',
  styleUrl: './app-btn-editar.component.css'
})
export class AppBtnEditarComponent implements OnInit {

  @Input() card: Card = new Card(0, '', '', new Date(), new Date(), '');
  @Output() updateCardEvent = new EventEmitter<Card>(); 

  modalRef?: BsModalRef<any>;
  formEdit: FormGroup = new FormGroup({});

  constructor(
    private modalService: BsModalService,
    private formBuilder: FormBuilder,
  ) { }

  ngOnInit(): void {
    this.formEdit = this.formBuilder.group({
      dstitulo: [null, Validators.required],
      dsdescricao: [null, Validators.required],
      dtcriacao: [null],
      dtconcluido: [null],
      iestatus: [null, Validators.required]
    });
  }

  updateCard() {
    this.modalRef?.hide();
    const card = this.formEdit?.getRawValue() as Card;
    this.updateCardEvent.emit(card);
  }
  
  openModal(template: TemplateRef<any>) {
    this.formEdit?.patchValue(this.card);
    this.modalRef = this.modalService.show(template);
  }

}

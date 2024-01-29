import { Component, EventEmitter, OnInit, Output, TemplateRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { Card } from '../model/card.model';

@Component({
  selector: 'app-btn-novo',
  templateUrl: './app-btn-novo.component.html',
  styleUrl: './app-btn-novo.component.css'
})
export class AppBtnNovoComponent implements OnInit {

  @Output() newCardEvent = new EventEmitter<Card>();

  modal?: BsModalRef;
  formNew: FormGroup = new FormGroup({});

  constructor(
    private modalService: BsModalService,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit() {
    this.formNew = this.formBuilder.group({
      dstitulo: [null, Validators.required],
      dsdescricao: [null, Validators.required],
      dtcriacao: [null],
      dtconcluido: [null],
      iestatus: [null, Validators.required]
    });
  }

  abrirModal(template: TemplateRef<any>) {
    this.formNew.reset();
    this.modal = this.modalService.show(template);
  }

  salvar() {
    this.modal?.hide();
    const cartao = this.formNew.getRawValue() as Card;
    this.newCardEvent.emit(cartao);
  }

}

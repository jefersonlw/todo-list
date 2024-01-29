import { Component, EventEmitter, Input, OnInit, Output, TemplateRef } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-btn-excluir',
  templateUrl: './app-btn-excluir.component.html',
  styleUrl: './app-btn-excluir.component.css'
})
export class AppBtnExcluirComponent implements OnInit {

  @Input() titleCard: String = '';
  @Input() idCard: number = 0;
  @Output() removeCardEvent = new EventEmitter<Number>();

  modalRef?: BsModalRef;

  constructor(
    private modalService: BsModalService,
  ) {}

  ngOnInit() {
  }
  
  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

  confirm() {
    this.modalRef?.hide();
    this.removeCardEvent.emit(this.idCard);
  }

  cancel() {
    this.modalRef?.hide();
  }
}

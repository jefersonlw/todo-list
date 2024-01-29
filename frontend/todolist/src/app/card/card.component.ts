import { Component, Input, OnInit } from '@angular/core';
import { Card } from '../model/card.model';
import { TodoListService } from '../service/todo-list.service';
import { TodoListComponent } from '../todo-list/todo-list.component';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent implements OnInit {

  @Input() card: Card = new Card(0, '', '', new Date(), new Date(), '');

  constructor(private todoListService: TodoListService, private todoListComponent: TodoListComponent) { }

  ngOnInit(): void { }

  updateStatus(status: string) {
    this.card.iestatus = status;
    this.updateCard(this.card);
  }

  updateCard(card: Card): void {
    this.todoListService.updateCard(this.card.idcard, card).subscribe(() => {
      this.todoListComponent.loadCards();
    });
  }

  deleteCard(): void {
    this.todoListService.deleteCard(this.card.idcard).subscribe(() => {
      this.todoListComponent.loadCards();
    });
  }

}

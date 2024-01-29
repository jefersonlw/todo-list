import { Component, OnInit } from '@angular/core';
import { TodoListService } from '../service/todo-list.service';
import { Card } from '../model/card.model';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.css'
})
export class TodoListComponent implements OnInit {

  cards: Card[] = [];

  constructor(private todoListService: TodoListService) { }

  ngOnInit(): void {
    this.loadCards();
  }

  loadCards(): void {
    this.cards = [];
    this.todoListService.getAllCards().subscribe(cards => {
      cards.forEach((card) =>
        this.cards.push(
          new Card(card.idcard, card.dstitulo, card.dsdescricao, card.dtcriacao, card.dtconcluido, card.iestatus)
        ));
      console.log(this.cards);
    });
  }

  newCard(card: Card): void {
    this.todoListService.createCard(card).subscribe(() => {
      this.loadCards();
    });
  }
  
}

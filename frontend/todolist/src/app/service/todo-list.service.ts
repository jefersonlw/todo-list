import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Card } from "../model/card.model";

@Injectable({
    providedIn: 'root'
})
export class TodoListService {

    private apiUrl = 'http://localhost:8080/api/cards';

    constructor(private http: HttpClient) { }

    getAllCards(): Observable<Card[]> {
        return this.http.get<Card[]>(this.apiUrl);
    }

    createCard(card: Card): Observable<Card> {
        return this.http.post<Card>(this.apiUrl, card);
    }

    updateCard(id: number, card: Card): Observable<Card> {
        return this.http.put<Card>(`${this.apiUrl}/${id}`, card);
    }

    deleteCard(id: number): Observable<void> {
        return this.http.delete<void>(`${this.apiUrl}/${id}`);
    }

}

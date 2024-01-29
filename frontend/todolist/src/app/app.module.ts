import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { ModalModule } from 'ngx-bootstrap/modal';
import { AppBtnEditarComponent } from "./app-btn-editar/app-btn-editar.component";
import { AppBtnExcluirComponent } from "./app-btn-excluir/app-btn-excluir.component";
import { AppBtnNovoComponent } from "./app-btn-novo/app-btn-novo.component";
import { AppComponent } from "./app.component";
import { AppRoutesModule } from "./app.routes";
import { CardComponent } from "./card/card.component";
import { TodoListComponent } from "./todo-list/todo-list.component";

@NgModule({
    declarations: [
        AppComponent,
        AppBtnEditarComponent,
        AppBtnExcluirComponent,
        AppBtnNovoComponent,
        TodoListComponent,
        CardComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutesModule,
        HttpClientModule,
        FormsModule,
        ReactiveFormsModule,
        ModalModule.forRoot(),
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }

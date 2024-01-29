import { RouterModule, Routes } from '@angular/router';
import { TodoListComponent } from './todo-list/todo-list.component';
import { NgModule } from '@angular/core';

export const routes: Routes = [
    { path: 'cards', component: TodoListComponent },
    { path: '', redirectTo: '/cards', pathMatch: 'full' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutesModule { }

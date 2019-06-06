import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { CreateItemComponent } from './create-item/create-item.component';
import { CommentsComponent } from './comments/comments.component';
import { HomePageComponent } from './home-page/home-page.component';

const routes: Routes = [
  {path: '', component: HomePageComponent},
  {path: 'CreateItem', component: CreateItemComponent},
  {path: 'CommentsComponent/:id', component: CommentsComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateItemComponent } from './create-item/create-item.component';
import { CommentsComponent } from './comments/comments.component';
import { HomePageComponent } from './home-page/home-page.component';
import { ItemServiceService } from './item-service.service';

@NgModule({
  declarations: [
    AppComponent,
    CreateItemComponent,
    CommentsComponent,
    HomePageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [ItemServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }

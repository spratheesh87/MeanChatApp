import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ChatCenterComponent } from './chat-center/chat-center.component';
import { UserListComponent } from './user-list/user-list.component';
import { ChatDetailComponent } from './chat-detail/chat-detail.component';
import { ChatService } from './chat.service';
import { HttpModule } from '@angular/http';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ChatCenterComponent,
    UserListComponent,
    ChatDetailComponent],
  imports: [ 
  BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [ChatService],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { Component } from '@angular/core';
import {ChatService} from  './chat.service'
import { Observable } from 'rxjs';
import { Subscription } from 'rxjs/Subscription';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  title = 'app';
  
  currentUser: String="";
    subscription: Subscription;
 
    constructor(private chatService:ChatService) { 
        // subscribe to home component messages
        this.subscription = this.chatService.getCurrentUser().subscribe(message => { this.currentUser = message.text; });
        
    }
  
  

  


}

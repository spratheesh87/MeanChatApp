import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';
import { ChatService } from './../chat.service';
import { Subscription } from 'rxjs/Subscription'; 
import {User} from '../user'
@Component({
  selector: 'user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  @Input() userList:Array<User>
  @Output() selectedUser:EventEmitter<String> = new EventEmitter()
  subscription :Subscription
  currentUser:String=""
  
  
  constructor(private chatService:ChatService) { 
    // subscribe to home component messages
    this.subscription = this.chatService.getCurrentUser().subscribe(message => { this.currentUser = message.text; });        
    
    
}  
onUserSelect(username){
  this.selectedUser.emit(username);
}
  ngOnInit() {
    /*alert("inside init of user list");
    this.chatService.listUsers(this.currentUser).subscribe(userList=>{
      this.usersList=userList
    })*/

    }
  }



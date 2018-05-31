import { Component, OnInit } from '@angular/core';
import {User} from '../user'
import {ChatService} from  '../chat.service'
import{Chat} from '../chat'
@Component({
  selector: 'chat-center',
  templateUrl: './chat-center.component.html',
  styleUrls: ['./chat-center.component.css']
})
export class ChatCenterComponent implements OnInit {


  constructor(private chatService:ChatService) { }
  isSignIn:boolean=false;
  isSignUp:boolean=false;
  signedUsers:Array<User>
  currentUser:String=""
  isSignPopupHidden =false;
  chatDetails:Array<Chat>
  
  ngOnInit() {
  }

  signIn(){
    this.isSignIn=true;
    this.isSignUp=false;
    this.isSignPopupHidden =false;
  }
  signUp() {    
    this.isSignUp=true;
    this.isSignIn=false; 
    this.isSignPopupHidden =false;
  }


  onSubmit(user:User,form){    
    if(this.isSignUp){
      this.chatService.signUp(user).subscribe((responseData)=>{
        alert(responseData);
      })
    }else {
      this.chatService.signIn(user).subscribe((responseData)=> {        
        this.chatService.setCurrentUser(user.userName);
      })
      // after sign in successfully, get the other signed users list other than current one
      this.chatService.listUsers(user.userName).subscribe(usersList=> {
        this.signedUsers=usersList;
      })

      
    }
    this.currentUser= user.userName;
    
  form.reset();
  this.isSignPopupHidden=true;
  }

  getSelectedUserData(event){
    this.chatService.listChatDetails(this.currentUser,event).subscribe(chats=>{
      this.chatDetails=chats;
    })
  }
}

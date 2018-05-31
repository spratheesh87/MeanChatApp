import { Injectable } from '@angular/core';
import {Http,Response,RequestOptions,Headers} from '@angular/http';
import 'rxjs/add/operator/map';
import { User } from './user';
import { Observable } from 'rxjs';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class ChatService {

  private subject = new Subject<any>();
 
    setCurrentUser(user: string) {
        this.subject.next({ text: user });
    }
 
    
    getCurrentUser(): Observable<any> {
        return this.subject.asObservable();
    }

  private _signIn='/api/signin';
  private _signUp="/api/signUp"
  private _listUsers="/api/listUsers/"
  private _listChatDetails="/api/listChatDetails/"
  private  headers = new Headers({'Content-Type':'application/json'});
  private options = new RequestOptions({headers:this.headers});
  constructor(private _http:Http) { }
  signIn(user:User){    
    return this._http.post(this._signIn,JSON.stringify(user),this.options).map((response:Response)=>{      
      return response.json()});
    }

    signUp(user:User){    
        
        return this._http.post(this._signUp,JSON.stringify(user),this.options).map((response:Response)=> {
        alert(response);
        return response.json();
      });
    }

      listUsers(currentUser:String){  
        alert("currentUser"+currentUser);  
        return this._http.get(this._listUsers+currentUser).map((response:Response)=>{ 
          alert(response) ;    
          return response.json()});
        }

        listChatDetails(currentuser,selecteduser){ 
          alert(currentuser+selecteduser) ; 
          return this._http.get(this._listChatDetails+currentuser+"/"+selecteduser).map((response:Response)=>{      
            return response.json()});
          }
}


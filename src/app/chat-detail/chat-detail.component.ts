import { Component, OnInit,Input} from '@angular/core';
import {Chat} from '../chat'
@Component({
  selector: 'chat-detail',
  templateUrl: './chat-detail.component.html',
  styleUrls: ['./chat-detail.component.css']
})
export class ChatDetailComponent implements OnInit {
  @Input() chatDetail:Array<Chat>
  constructor() { }

  ngOnInit() {

  }

}

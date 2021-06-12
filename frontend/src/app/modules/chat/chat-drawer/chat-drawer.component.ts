import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ChatService } from '@modules/chat/services/chat.service';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { ChatState } from '@modules/chat/states/chat.state';

import {
  trigger,
  state,
  style,
  animate,
  transition,
  // ...
} from '@angular/animations';

@Component({
  providers: [ChatService],
  selector: 'app-chat-drawer',
  templateUrl: './chat-drawer.component.html',
  styleUrls: ['./chat-drawer.component.scss'],
  animations: [

  ]
})
export class ChatDrawerComponent implements OnInit {
  public showChat: boolean;
  private chatState: any;
  protected chatSubs: Subscription;
  public chatMessage = 'Chat ...';
  public chatting = true;
  public error:any = null;
  public openChat: boolean;

  constructor(
      private route: ActivatedRoute,
      private router: Router,
      private chatService: ChatService,
      private formBuilder: FormBuilder,
      private _store: Store<{chat:ChatState}>) {
  }

  ngOnInit(): void {
       this.showChat = false;
       this.subscribeChat();
       //this.chatService.channel().subscribe((val) => {
       //});
  }

  subscribeChat() {
      this.chatSubs = this._store.select('chat').subscribe(
             (chat) => {
                 this.onChatUpdate(chat);
             }
     );
  }

  onChatUpdate(chat) {
       this.showChat = chat['chat'];
  }


  closeChat(): void {
     this.showChat = !this.showChat;
  }

  send(): void {
     this.chatService.send('some new message from child');
     this.chatService.broadcast('and more here ');
  }
}


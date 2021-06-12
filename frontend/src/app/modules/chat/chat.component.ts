import { Component, OnInit, ElementRef, Renderer2, ViewChild, AfterViewInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ChatService } from '@modules/chat/services/chat.service';
import { ChatDrawerComponent } from '@modules/chat/chat-drawer/chat-drawer.component';
import { Store } from '@ngrx/store';
import { Subject, Subscription, Observable } from 'rxjs';
import { ChatState } from '@modules/chat/states/chat.state';

@Component({
  providers: [ChatService],
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {
  //
  @ViewChild(ChatDrawerComponent) drawer;
  public element;
  protected chatSubs: Subscription;
  protected chatMessages: Observable<any>;
  public chatMessage = 'Chat in...';
  public chatting = true;
  public error:any = null;
  public openChat: boolean;

  constructor(
    protected chatService: ChatService,
    private route: ActivatedRoute,
    private router: Router,
    private formBuilder: FormBuilder,
    private store: Store<{chat:ChatState}>
  ) {
         this.chatMessages = this.chatService.channel();    
  }

  ngAfterViewInit() {

       this.drawer.chatService.channel().subscribe((val) => {
           alert("IN PARENT VIEW "+JSON.stringify(val));
       });
       
  }

  ngOnInit(): void {
      this.openChat = false;
      this.subscribeChat();
      this.initChat();
  }

  initChat() {
      //var myStorage = localStorage;

      //if (!myStorage.getItem('chatID')) {
      //    myStorage.setItem('chatID', createUUID());
      //}


      //this.element.click(openElement);
  }

  subscribeChat() {
      this.chatSubs = this.store.select('chat').subscribe(
             chat => {
                 if (chat['chat']) {
                     if (chat['items']['message']) {
                            //alert('NEWS FROM CHILD '+JSON.stringify(chat));
                     } else {
                         this.onChatUpdate(chat);
                     }
                 } else {
                     this.onChatUpdate(chat);
                 }
             }
     );

     this.chatService.channel().subscribe((chan) => {
     });

     this.chatMessages.subscribe((val) => {
     });
  }

  onChatUpdate(chat): void {
     this.openChat = chat['chat'];

  }

  toggleChatDrawer(): void {
       if (this.openChat) {
           this.chatService.publish('open_chat', {'module':'chat', 'action':'open_chat'});
       } else {
           this.chatService.publish('close_chat', {'module':'chat', 'action':'close_chat'});
       }
  }

  toggleChat(): void {
      this.openChat = !this.openChat;
      this.toggleChatDrawer();
  }
}

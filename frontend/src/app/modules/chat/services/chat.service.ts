import { BehaviorSubject, ReplaySubject, Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { ChatState } from '@modules/chat/states/chat.state';
import { ChatActionTypes,  ChatActions} from '@modules/chat/actions/chat.actions';

@Injectable({
  providedIn: 'root'
})

export class ChatService {
      private topic = new  ReplaySubject<string>();
      private _topic: Observable<string> = this.topic.asObservable();      

      constructor(
                  protected _store: Store<{chat:ChatState}>) {
      }

      publish(event, payload): void {
      /* 
        @parameter event
        @parameter payload
        
       */
           var m = new Map();
           m['open_chat'] = ChatActionTypes.OpenChat;
           m['close_chat'] = ChatActionTypes.CloseChat;
           m['new_message'] = ChatActionTypes.NewMessage;
           this.topic.next(event);
           this._store.dispatch({type: m[event], payload: payload});
      }

      public send(message): void {
          this.publish('new_message', {'message': message});
      }

      public broadcast(message): void {
          this.topic.next(message);
      }

      public channel() {
         return this._topic;
      }

}

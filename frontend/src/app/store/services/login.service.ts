import { BehaviorSubject, Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { LoginState } from '@store/states/login.state';
import { LoginActionTypes,  LoginActions} from '@store/actions/login.actions';

@Injectable({
  providedIn: 'root'
})

export class LoginService {

      private _item: BehaviorSubject<any> = new BehaviorSubject<any>('');
      public item: Observable<any> = this._item.asObservable();


      constructor(
                  protected _store: Store<{nf:LoginState}>) {

      }

      publish(event): void {
           var m = new Map();
           m['open_modal'] = LoginActionTypes.OpenModal;
           m['close_modal'] = LoginActionTypes.CloseModal;
           if (event!=='open_modal' && event!=='close_modal) {
                event = 'close_modal';
           }
           this._store.dispatch({type: m[event], payload:{'id':id, 'event': event, 'payload': {'event':event}} });
      }


}


import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { LoginState } from '@store/states/login.state';
import { LoginActionTypes,  LoginActions} from '@store/actions/login.actions';

@Injectable({
  providedIn: 'root'
})

export class LoginService {

      constructor
                 (
                  protected _store: Store<{login:LoginState}>) {
      }

      publish(event, payload): void {
           var m = new Map();
           m['open_modal'] = LoginActionTypes.OpenModal;
           m['close_modal'] = LoginActionTypes.CloseModal;
           this._store.dispatch({type: m[event], payload: payload}); 
      }


}


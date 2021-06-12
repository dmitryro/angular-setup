import { Effect, Actions, createEffect, ofType } from "@ngrx/effects";
import { Injectable } from '@angular/core';
import { Observable } from "rxjs";
import { ChatActionTypes } from '@modules/chat/actions/chat.actions';
import { of } from 'rxjs';
import { tap, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'any'
})

export class ChatEffects {
      close$ = createEffect(() =>
                             this.actions$.pipe(
                                        ofType(ChatActionTypes.CloseChat),
                                        tap(action => {
                                            console.log("CLOSE "+JSON.stringify(action));
                                        })
                          ), {dispatch: false});



      open$ = createEffect(() =>
                             this.actions$.pipe(
                                        ofType(ChatActionTypes.OpenChat),
                                        tap(action => {
                                            console.log("OPEN "+JSON.stringify(action));
                                        })
                          ), {dispatch: false});


      newmessage$ = createEffect(() =>
                             this.actions$.pipe(
                                        ofType(ChatActionTypes.NewMessage),
                                        tap(action => {
                                            console.log("NEW MEW MESSAGE "+JSON.stringify(action));
                                        })
                          ), {dispatch: false});

     constructor(private actions$: Actions) {
         //close$.subscribe();
         /* A more primitive, not type safe way of doing same thing */
         // actions$.subscribe(action => {
         //      if (action.type === '[Chat] Close chat drawer') {
         //             console.log('TIME TO CLOSE');
         //      }
         // });
     }
}

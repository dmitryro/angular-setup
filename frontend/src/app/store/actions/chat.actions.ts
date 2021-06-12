import { Action, createAction, props } from '@ngrx/store';

export enum ChatActionTypes {
    OpenChat = '[Chat] Open chat drawer',
    CloseChat = '[Chat] Close chat drawer',
    NewMessage = '[Chat] New message sent',
}

export class CloseChat implements Action {
    readonly type = ChatActionTypes.CloseChat;
    constructor(public payload: any ) { }
}

export class OpenChat implements Action {
    readonly type = ChatActionTypes.OpenChat;
    constructor(public payload: any ) { }
}

export class NewMessage implements Action {
    readonly type = ChatActionTypes.NewMessage;
    constructor(public payload: any ) { }
}

export type ChatActions = OpenChat | CloseChat | NewMessage;

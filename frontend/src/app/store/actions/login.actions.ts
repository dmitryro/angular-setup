import { Action, createAction, props } from '@ngrx/store';

export enum LoginActionTypes {
    OpenModal = '[Login] Open modal dialog',
    CloseModal = '[Login] Display toast message',
}

export class CloseModal implements Action {
    readonly type = LoginActionTypes.CloseModal;
    constructor(public payload: any ) { }
}

export class OpenModal implements Action {
    readonly type = LoginActionTypes.OpenModal;
    constructor(public payload: any ) { }
}


export type LoginActions = OpenModal | CloseModal;

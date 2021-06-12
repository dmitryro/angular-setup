import { State } from './store/state/login.state';

const initialState: State = {
     modal: false,
}

export function appReducer(state, action) {
    switch(action.type) {
       case 'LOGIN_MODAL_ON':
           return { modal: true};
       case 'LOGIN_MODAL_OFF':
           return {  modal: false}
       default:
           return state;
    }

    return state;
};


export function appModalReducer(state, action) {
    switch(action.type) {
       case 'LOGIN_MODAL_ON':
           return { open: true};
       case 'LOGIN_MODAL_OFF':
           return {  open: false}
       default:
           return state;
    }

    return state;
};


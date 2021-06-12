import { LoginActionTypes, LoginActions} from '@store/actions/login.actions';
import { LoginState,  initialState } from '@store/states/login.state';

export function loginReducer(state = initialState, action: LoginActions): LoginState {
    switch (action.type) {
        case LoginActionTypes.CloseModal:
            {
                return { modal: false, items: action.payload };
            }
        case LoginActionTypes.OpenModal:
            {
                return { modal: true, items: action.payload };
            }
        default:
            return state;
    }
}



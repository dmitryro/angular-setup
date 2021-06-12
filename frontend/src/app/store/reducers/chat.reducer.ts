import { ChatActionTypes, ChatActions} from '@store/actions/chat.actions';
import { ChatState,  initialState } from '@store/states/chat.state';

export function chatReducer(state = initialState, action: ChatActions): ChatState {
    switch (action.type) {
        case ChatActionTypes.CloseChat:
            {
                return { chat: false, items: action.payload };
            }
        case ChatActionTypes.OpenChat:
            {
                return { chat: true, items: action.payload };
            }
        case ChatActionTypes.NewMessage:
            {
                return { chat: true, items: action.payload };
            }
        default:
            return state;
    }
}

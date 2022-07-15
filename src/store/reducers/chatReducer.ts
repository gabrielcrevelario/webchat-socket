import { MESSAGE_NEW, MESSAGE_SHOW } from "../actions/actionTypes";
const INITIAL_STATE = {
  list: [
    {
      user: {
        id: "123456",
        name: "New User",
        picture: "",
      },
      message: "Hello",
    },
  ],
};

type ActionType = {
  type: string;
  payload: any;
};

export default function (state = INITIAL_STATE, action: ActionType) {
  switch (action.type) {
    case MESSAGE_SHOW:
      return { ...state, list: action.payload.data };
    case MESSAGE_NEW:
      return { ...state, chat: action.payload };
    default:
      return state;
  }
}

import { combineReducers } from "redux";
import ChatReducer from "./chat.reducer";
import UserReducer from "./user.reducer";
const rootReducer = combineReducers({
  chat: ChatReducer,
  user: UserReducer,
});
export default rootReducer;

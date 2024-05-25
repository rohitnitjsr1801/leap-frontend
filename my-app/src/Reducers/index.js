import { combineReducers } from "redux";
import updateUserId from "./UserId";
import updateUserToken from "./UserToken";

const rootReducer=combineReducers({
    updateUserId,updateUserToken
})
export default rootReducer
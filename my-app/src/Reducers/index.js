import { combineReducers } from "redux";
import updateUserId from "./UserId";
import updateUserToken from "./UserToken";
import updateUserRole from "./UserRole";
import updateUserName from "./UserName";

const rootReducer=combineReducers({
    updateUserId,updateUserToken,updateUserRole,updateUserName
})
export default rootReducer
import { combineReducers } from "redux";
import updateUserId from "./UserId";
import updateUserToken from "./UserToken";
import updateUserRole from "./UserRole";
import updateUserName from "./UserName";
import authReducer from "./AuthReducer";

const rootReducer=combineReducers({
    updateUserId,updateUserToken,updateUserRole,updateUserName,
    authReducer,
})
export default rootReducer
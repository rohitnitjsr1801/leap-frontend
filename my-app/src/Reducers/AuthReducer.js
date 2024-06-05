// src/redux/reducers/authReducer.js

let isAuthenticated= 0;
const authReducer = (state = isAuthenticated, action) => {
    debugger;
    console.log(isAuthenticated+" "+action.type+" "+action.payload+" "+(action.type==='LOGIN'));
    debugger;
    switch (action.type) {
      case 'LOGIN':
          {
            console.log("aaya "+" "+action.payload);
            return isAuthenticated=action.payload;
          }
      case 'LOGOUT':
         {
            return isAuthenticated=action.payload;
         }      
      default:
        return state;
    }
  };
  
  export default authReducer;
  
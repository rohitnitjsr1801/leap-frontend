let initialState = 0;  // Define the initial state

const updateUserId = (state = initialState, action) => {
  
  switch (action.type) {
      case 'UPDATE_USER_ID':
      {
        return initialState=action.payload;
      }
      default:{
         return state;
        }  // Return the current state if the action is not handled
  }
};

export default updateUserId;

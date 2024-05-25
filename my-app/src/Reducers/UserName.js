let initialName = "USER";  // Define the initial state

const updateUserName = (state = initialName, action) => {
  
  switch (action.type) {
      case 'UPDATE_USER_NAME':
      {
        return initialName=action.payload;
      }
      default:{
         return state;
        }  // Return the current state if the action is not handled
  }
};

export default updateUserName;
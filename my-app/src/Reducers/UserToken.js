let initialToken = "token";  // Define the initial state

const updateUserToken = (state = initialToken, action) => {
  
  switch (action.type) {
      case 'UPDATE_USER_TOKEN':
      {
        return initialToken=action.payload;
      }
      default:
        {
         return state;
        }  // Return the current state if the action is not handled
  }
};

export default updateUserToken;
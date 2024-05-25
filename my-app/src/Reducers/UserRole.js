let initialRole = "CUSTOMER";  // Define the initial state

const updateUserRole = (state = initialRole, action) => {
  
  switch (action.type) {
      case 'UPDATE_USER_ROLE':
      {
        return initialRole=action.payload;
      }
      default:{
         return state;
        }  // Return the current state if the action is not handled
  }
};

export default updateUserRole;
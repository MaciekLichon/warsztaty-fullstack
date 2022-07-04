// selectors
export const getUserStatus = state => state.user[0].loggedIn;

// actions
const createActionName = actionName => `app/user/${actionName}`;
const UPDATE_USER = createActionName('UPDATE_USER');

// action creators
export const updateUser = payload => ({ type: UPDATE_USER, payload });

const userReducer = (statePart = [], action) => {
  switch(action.type) {
    case UPDATE_USER:
      return statePart.map(user => ({ ...user, loggedIn: action.payload }));
    default:
      return statePart;
  };
};

export default userReducer;

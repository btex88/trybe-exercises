const INIT = {data: []};

const registeredUsers = (state = INIT, action) => {
  switch (action.type) {
  case 'ADD':
    return {data: [...state.data, action.newUser]};
  default:
    return state;
  }
};

export default registeredUsers;

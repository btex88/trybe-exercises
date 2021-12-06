const INIT = {
  authenticated: true,
};

const userAuth = (state = INIT, action) => {
  switch (action.type) {
  case 'TRUE':
    return { authenticated: action.authStatus };
  default:
    return state;
  }
};

export default userAuth;

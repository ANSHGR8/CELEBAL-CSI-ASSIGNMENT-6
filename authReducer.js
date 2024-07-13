const initialState = {
  user: null,
  isAuthenticated: false,
  error: null,
};

export default function authReducer(state = initialState, action) {
  switch (action.type) {
    case 'LOGIN_SUCCESS':
      return { ...state, user: action.payload, isAuthenticated: true };
    case 'LOGIN_FAILURE':
      return { ...state, error: action.payload };
    default:
      return state;
  }
}


export const USER_LOG_IN = 'user/log-in';
export const USER_LOG_OUT = 'user/log-out';
export const logInUser = (name, email) => ({type: USER_LOG_IN, name, email});
export const logOutUser = () => ({type: USER_LOG_OUT});

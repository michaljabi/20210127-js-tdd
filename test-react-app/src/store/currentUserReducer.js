import { USER_LOG_IN, USER_LOG_OUT } from './currentUserActions'

const initialState = {
	name: '',
	email: '',
	isAuth: false
};

const userReducer =  function (user = initialState, action) {
	const { name, email } = action;
	switch(action.type) {
		case USER_LOG_IN:
			return {name, email, isAuth: true}
		case USER_LOG_OUT:
			return {...initialState}
		default:
			return user;
	}
}

export default userReducer;

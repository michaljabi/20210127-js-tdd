import { makeAutoObservable } from 'mobx'

export class UserStore {

	name = '';
	email = '';

	constructor (name = '', email = '') {
		makeAutoObservable(this);
		this.name = name;
		this.email = email;
	}

	get isAuth() {
		return Boolean(this.name && this.email);
	}

	logInUser = (name, email) => {
		this.name = name;
		this.email = email;
	}

	logOutUser = () => {
		this.name = '';
		this.email = '';
	}
}

import PropTypes from 'prop-types'
import { observer } from 'mobx-react-lite'
import { userStore } from '../../models/mobx-store'
import React from 'react'

UserProfile.propTypes = {
	isAuth: PropTypes.bool.isRequired,
	name: PropTypes.string,
	email: PropTypes.string,
	logInUser: PropTypes.func,
	logOutUser: PropTypes.func
}

UserProfile.defaultProps = {
	name: '',
	email: '',
	logInUser: () => {},
	logOutUser: () => {}
}

function UserProfile ({isAuth, name, email, logInUser, logOutUser}) {
	return (
		<div>
			<h2>User Profile</h2>
			<hr/>
			{ !isAuth && <div className="alert alert-danger">
					You are not logged in
					<div className="text-right">
						<button
							className="btn btn-outline-danger"
							onClick={() => logInUser('John', 'john.kowalsky@random-domain.pl')}
							>
							Log in...!
						</button>
					</div>
			</div> }
			{ isAuth && (
				<div className="logged-in-box">
					<h5>Logged in as:</h5>
					<div>Name: <strong>{name}</strong></div>
					<div>E-mail: <strong>{email}</strong></div>
					<div className="text-right">
						<button
							className="btn btn-warning"
							onClick={() => logOutUser()}
						>
							LogOut
						</button>
						</div>
				</div>
			)}
		</div>
	)
}

export default observer(() => <UserProfile isAuth={userStore.isAuth} email={userStore.email} name={userStore.name} logInUser={userStore.logInUser} logOutUser={userStore.logOutUser} />)

export {UserProfile as UserProfileToTest}

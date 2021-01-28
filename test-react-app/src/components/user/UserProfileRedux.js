/*
* THIS FILE IS HERE ONLY TO COMPARE REDUX _vs_ MOBX - tests !!!
*
* We do not use those 2 way of state management in one project!
* (but technically it is possible)
*
* */

import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { logInUser, logOutUser } from '../../store/currentUserActions'

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
							onClick={() => logInUser('Mike', 'mike.doe@random-domain.pl')}
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

const mapStateToProps = (state) => ({
	isAuth: state.user.isAuth,
	name: state.user.name,
	email: state.user.email
})

const mapDispatchToProps = { logInUser, logOutUser }

export default connect(mapStateToProps, mapDispatchToProps)(UserProfile)

export {UserProfile as UserProfileToTest}

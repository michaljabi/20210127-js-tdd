import React from 'react'
import { UserProfileToTest } from './UserProfile'
import { render, fireEvent } from '@testing-library/react'

describe( 'UserProfile', () => {

	it( 'should have text "You are not logged in" if isAuth === false', () => {

		const { getByText } = render(<UserProfileToTest isAuth={false} />)

		const alertBox = getByText('You are not logged in');

		expect(alertBox).toBeTruthy();
	} )

	it( 'should have button btn-outline-danger for log in if isAuth === false', () => {
		const { container } = render(<UserProfileToTest isAuth={false} />)

		const btnDanger = container.querySelector('.btn.btn-outline-danger');

		expect(btnDanger).toBeTruthy();
	})

	it( 'should fire default logInUser John with e-mail when Log in button clicked', () => {
		const logInUserSpy = jest.fn();
		const { container } = render(<UserProfileToTest isAuth={false} logInUser={logInUserSpy} />)
		const btnDanger = container.querySelector('.btn.btn-outline-danger');

		fireEvent.click(btnDanger)

		expect(logInUserSpy).toHaveBeenCalledWith('John', 'john.kowalsky@random-domain.pl');
	})

	it( 'should fire logOutUser when btn-warning LogOut clicked', () => {
		const logOutUserSpy = jest.fn();
		const { container } = render(<UserProfileToTest isAuth={true} logOutUser={logOutUserSpy} />)
		const btnLogOut = container.querySelector('.btn.btn-warning');

		fireEvent.click(btnLogOut)

		expect(logOutUserSpy).toHaveBeenCalled();
	})
} )

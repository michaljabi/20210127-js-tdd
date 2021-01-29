import React from 'react';
import { fireEvent, render } from '@testing-library/react'

describe('TheGame', () => {

	it('should be mountable', () => {

		const { container } = render(<TheGame choices={[]}  />);

		expect(container).toBeTruthy();
	})

	it('should render buttons depend on amount of Choices with proper data-testid and proper Names', () => {

		const choicesList = ['rock', 'paper', 'scissors'];
		const { getByTestId } = render(<TheGame choices={choicesList}  />);

		const myButtonR = getByTestId('rock');
		const myButtonP = getByTestId('paper');
		const myButtonS = getByTestId('scissors');

		expect(myButtonR).toHaveTextContent('ROCK');
		expect(myButtonP).toHaveTextContent('PAPER');
		expect(myButtonS).toHaveTextContent('SCISSORS');
	})

	it('should respond with proper onOptionChosen callback when button clicked and show the result on callback return', () => {

		const onOptionChosenSpy = jest.fn(() => 'Game WIN, computer choice: scissors');
		const choicesList = ['rock'];
		const { getByTestId, container } = render(<TheGame choices={choicesList} onOptionChosen={onOptionChosenSpy}  />);
		const myButtonR = getByTestId('rock');
		const myResult = container.querySelector('.result')

		fireEvent.click(myButtonR)

		expect(onOptionChosenSpy).toHaveBeenCalledWith('rock');
		expect(myResult).toHaveTextContent('Game WIN, computer choice: scissors');
	})

})

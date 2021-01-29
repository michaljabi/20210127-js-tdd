import React, {useState} from 'react';

function TheGame ({choices = [], onOptionChosen}) {

	const [result, setResult] = useState('');

	const handleOptionChosen = (choice) => {
		setResult(onOptionChosen(choice))
	}

	return (
		<div>
			<h3 className="result">{result}</h3>
			<section>
			{
				choices.map((ch) => <button key={ch} data-testid={ch} onClick={() => handleOptionChosen(ch)}>{ch.toUpperCase()}</button>)
			}
			</section>
		</div>
	)
}

export default TheGame;

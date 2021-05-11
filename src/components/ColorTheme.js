import React, { useState, useEffect } from 'react';


function ColorThemePicker() {

	// State
	const [ colorTheme, setColorTheme ] = useState('theme-green');

	// Effect
	useEffect(() => {
		// Check for selected theme /// localStorage value
		const currentThemeColor = localStorage.getItem('theme-color');
		// if found, set selected theme value in state
		if (currentThemeColor) {
			setColorTheme(currentThemeColor);
		}
	}, []);

	// Set theme
	const handleClick = (theme) => {
		setColorTheme(theme);
		localStorage.setItem("theme-color", theme)
	}


	return (
		<div className="theme-options">
			<div id="theme-white"
				onClick={() => handleClick("theme-white")}
				className={"${colorTheme === 'theme-white' ? 'active' : ''}"}></div>
			<div id="theme-yellow"
				onClick={() => handleClick("theme-yellow")}
				className={"${colorTheme === 'theme-yellow' ? 'active' : ''}"}></div>
			<div id="theme-green" 
				onClick={() => handleClick("theme-green")}
				className={"${colorTheme === 'theme-green' ? 'active' : ''}"}></div>
			<div id="theme-blue"
				onClick={() => handleClick("theme-blue")}
				className={"${colorTheme === 'theme-blue' ? 'active' : ''}"}></div>
			<div id="theme-purple"
				onClick={() => handleClick("theme-purple")}
				className={"${colorTheme === 'theme-purple' ? 'active' : ''}"}></div>
			<div id="theme-orange"
				onClick={() => handleClick("theme-orange")}
				className={"${colorTheme === 'theme-orange' ? 'active' : ''}"}></div>
			<div id="theme-red"
				onClick={() => handleClick("theme-red")}
				className={"${colorTheme === 'theme-red' ? 'active' : ''}"}></div>
			<div id="theme-black"
				onClick={() => handleClick("theme-black")}
				className={"${colorTheme === 'theme-black' ? 'active' : ''}"}></div>
		</div>
	)
}

export default ColorThemePicker;
import React from 'react';
import './Button.css';

function Button({ text, active }) {
	return <button className={`button ${active && 'active'}`}>{text}</button>;
}

export default Button;

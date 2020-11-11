import React from 'react';
import Lottie from 'react-lottie';
import animationData from '../../lottie/25005-404-hamster-wheel.json';

export default function ErrorAnimation() {
	const defaultOptions = {
		loop: true,
		autoplay: true,
		animationData: animationData,
		rendererSettings: {
			preserveAspectRatio: 'xMidYMid slice',
		},
	};
	return (
		<div>
			<Lottie options={defaultOptions} height={400} width={500} />
		</div>
	);
}

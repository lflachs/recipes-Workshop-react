import React from 'react';
import './Card.css';
import Heart from '../../assets/heart.svg';
import HeartFav from '../../assets/heart-active.svg';

function Card({ image, title, onFavorite, isFavorite }) {
	return (
		<div
			className='card'
			style={{
				backgroundImage: `url(${
					image
						? image
						: 'https://lh3.googleusercontent.com/proxy/4_nkyBr7BHMglPg6_tQVSgVU6JcnNwIFv7HTSsPJKRi7thIF6gZBkakSRGi41Q5b92LVhxs6CfJfAeEDDouyzwV2Kwox_32SllQRHMmOB7zM1WSawUHQmQI8VUZGKBCb'
				})`,
			}}
		>
			<img
				src={isFavorite ? HeartFav : Heart}
				alt='favorite-icon'
				className='favorite-icon'
				onClick={() => onFavorite()}
			/>
			<p>{title}</p>
		</div>
	);
}

export default Card;

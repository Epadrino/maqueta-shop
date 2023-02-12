import React, { FC } from 'react';

import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';

interface Props {
	images: string[];
}

// const para los estilos del Slide
const divStyle = {
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'center',
	backgroundSize: 'cover',
	height: '650px',
};

export const ProducSlideShow: FC<Props> = ({ images }) => {
	return (
		<Slide easing="ease" duration={7000} indicators>
			{images.map((image) => {
				const url = `/products/${image}`;
				return (
					<div className="slide-container" key={image}>
						<div style={{ ...divStyle, backgroundImage: `url(${url})` }}></div>
					</div>
				);
			})}
		</Slide>
	);
};

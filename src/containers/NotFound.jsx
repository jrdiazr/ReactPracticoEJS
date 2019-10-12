import React, { Fragment } from 'react';
import '../assets/styles/components/NotFound.scss';

const NotFound = () => (
	<>
		<section className='mensaje'>
			<div className='mensaje__container'>
				<h1 className='mensaje__container--title'>404</h1>
				<p>Page not found</p>
			</div>
		</section>
	</>
);

export default NotFound;

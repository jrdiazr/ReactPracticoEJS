import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import Search from '../components/Search';
import Categories from '../components/Categories';
import Carousel from '../components/Carousel';
import CarouselItem from '../components/CarouselItem';
import Footer from '../components/Footer';
import useInitialState from '../hooks/useInitialState';
import '../assets/styles/App.scss';

const API = 'http://localhost:3000/initialState';
const App = () => {
	const initialState = useInitialState(API);

	return (
		<div className='App'>
			<Header></Header>
			<Search></Search>
			{initialState.mylist.length > 0 && (
				<Categories title='Mi lista'>
					<Carousel>
						{initialState.mylist.map(video => (
							<CarouselItem key={video.id} {...video}></CarouselItem>
						))}
					</Carousel>
				</Categories>
			)}
			{initialState.trends.length > 0 && (
				<Categories title='Tendencias'>
					<Carousel>
						{initialState.trends.map(video => (
							<CarouselItem key={video.id} {...video}></CarouselItem>
						))}
					</Carousel>
				</Categories>
			)}
			{initialState.originals.length > 0 && (
				<Categories title='Originales de Platzi Video'>
					<Carousel>
						{initialState.originals.map(video => (
							<CarouselItem key={video.id} {...video}></CarouselItem>
						))}{' '}
					</Carousel>
				</Categories>
			)}
			<Footer></Footer>
		</div>
	);
};

export default App;

import React from 'react';
import { useNavigate } from 'react-router-dom';
import Filme4 from '../assets/CategoryMovies.jpg';
import Filme1 from '../assets/filme1.jpg';
import Filme2 from '../assets/filme2.jpg';
import Filme3 from '../assets/filme3.jpg';
import Filme5 from '../assets/filme5.jpg';
import { Banner, Container, Content, Element, Text, Title } from './styles';

const movies = [
	{
		id: 1,
		name: 'Até o último homem',
		imageUrl: Filme1,
	},
	{
		id: 2,
		name: 'Os Vingadores',
		imageUrl: Filme2,
	},
	{
		id: 3,
		name: 'Godzilla vs Kong',
		imageUrl: Filme3,
	},
	{
		id: 4,
		name: 'A Cabana',
		imageUrl: Filme4,
	},
	{
		id: 5,
		name: 'Bad Boys',
		imageUrl: Filme5,
	},
];

const MoviePage = () => {
	const navigate = useNavigate();

	const handleItemClick = (itemId) => {
		navigate(`/${itemId}/chat`);
	};

	return (
		<Container>
			<Banner>
				<Title>Filmes</Title>
			</Banner>
			<Content>
				{movies.map((movie) => (
					<Element key={movie.id} onClick={() => handleItemClick(movie.id)}>
						<img src={movie.imageUrl} alt={movie.name} />
						<Text>
							<p>{movie.name}</p>
						</Text>
					</Element>
				))}
			</Content>
		</Container>
	);
};

export default MoviePage;

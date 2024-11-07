import React from 'react';
import { useNavigate } from 'react-router-dom';
import Livro5 from '../assets/CategoryBooks.jpg';
import Livro1 from '../assets/livro1.jpg';
import Livro2 from '../assets/livro2.jpg';
import Livro3 from '../assets/livro3.jpg';
import Livro4 from '../assets/livro4.jpg';
import Livro6 from '../assets/livro6.jpg';
import Livro7 from '../assets/livro7.jpg';
import { Banner, Container, Content, Element, Text, Title } from './styles';

const books = [
	{
		id: 1,
		name: 'Textos cruéis demais',
		imageUrl: Livro1,
	},
	{
		id: 2,
		name: 'Quebre os seus sapatinhos de cristal',
		imageUrl: Livro2,
	},
	{
		id: 3,
		name: 'As mil partes do meu coração',
		imageUrl: Livro3,
	},
	{
		id: 4,
		name: 'Faça sua coroa de gelo brilhar',
		imageUrl: Livro4,
	},
	{
		id: 5,
		name: 'É assim que começa',
		imageUrl: Livro5,
	},
	{
		id: 6,
		name: 'É assim que acaba',
		imageUrl: Livro6,
	},
	{
		id: 7,
		name: 'Novembro, 9',
		imageUrl: Livro7,
	},
];

const BooksPage = () => {
	const navigate = useNavigate();

	const handleItemClick = (itemId) => {
		navigate(`/${itemId}/chat`);
	};

	return (
		<Container>
			<Banner>
				<Title>Livros</Title>
			</Banner>
			<Content>
				{books.map((book) => (
					<Element key={book.id} onClick={() => handleItemClick(book.id)}>
						<img src={book.imageUrl} alt={book.name} />
						<Text>
							<p>{book.name}</p>
						</Text>
					</Element>
				))}
			</Content>
		</Container>
	);
};

export default BooksPage;

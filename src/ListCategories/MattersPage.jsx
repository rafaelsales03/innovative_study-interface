import React from 'react';
import { useNavigate } from 'react-router-dom';
import Matematica from '../assets/CategoryMatters.jpg';
import Fisica from '../assets/fisica.jpg';
import Geografia from '../assets/geografia.jpg';
import Historia from '../assets/historia.jpg';
import Portugues from '../assets/portugues.jpg';
import Quimica from '../assets/quimica.jpg';
import { Banner, Container, Content, Element, Text, Title } from './styles';

const matters = [
	{
		id: 1,
		name: 'Química',
		imageUrl: Quimica,
	},
	{
		id: 2,
		name: 'Português',
		imageUrl: Portugues,
	},
	{
		id: 3,
		name: 'História',
		imageUrl: Historia,
	},
	{
		id: 4,
		name: 'Matemática',
		imageUrl: Matematica,
	},
	{
		id: 5,
		name: 'Geografia',
		imageUrl: Geografia,
	},
	{
		id: 6,
		name: 'Física',
		imageUrl: Fisica,
	},
];

const MattersPage = () => {
	const navigate = useNavigate();

	const handleItemClick = (itemId) => {
		navigate(`/${itemId}/chat`);
	};

	return (
		<Container>
			<Banner>
				<Title>Matérias</Title>
			</Banner>
			<Content>
				{matters.map((matter) => (
					<Element key={matter.id} onClick={() => handleItemClick(matter.id)}>
						<img src={matter.imageUrl} alt={matter.name} />
						<Text>
							<p>{matter.name}</p>
						</Text>
					</Element>
				))}
			</Content>
		</Container>
	);
};

export default MattersPage;

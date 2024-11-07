import React from 'react';
import { useNavigate } from 'react-router-dom';
import CategoryAnimes from '../assets/CategoryAnimes.jpg';
import BlackClover from '../assets/blackclover.jpg';
import Bleach from '../assets/bleach.jpg';
import DeathNote from '../assets/deathnote.jpg';
import HunterXHunter from '../assets/hunterxhunter.jpg';
import KimetsuNoYaiba from '../assets/kimetsunoyaiba.jpg';
import Naruto from '../assets/naruto.jpg';
import OnePiece from '../assets/onepiece.jpg';
import ShingekiNoKyojin from '../assets/shingekinokyojin.jpg';
import YuYuHakusho from '../assets/yuyuhakusho.jpg';
import { Banner, Container, Content, Element, Text, Title } from './styles';

const animes = [
	{
		id: 1,
		name: 'Yu Yu Hakusho',
		imageUrl: YuYuHakusho,
	},
	{
		id: 2,
		name: 'Death Note',
		imageUrl: DeathNote,
	},
	{
		id: 3,
		name: 'Black Clover',
		imageUrl: BlackClover,
	},
	{
		id: 4,
		name: 'One Piece',
		imageUrl: OnePiece,
	},
	{
		id: 5,
		name: 'Boku No Hero',
		imageUrl: CategoryAnimes,
	},
	{
		id: 6,
		name: 'Naruto',
		imageUrl: Naruto,
	},
	{
		id: 7,
		name: 'Hunter x Hunter',
		imageUrl: HunterXHunter,
	},
	{
		id: 8,
		name: 'Shingeki No Kyojin',
		imageUrl: ShingekiNoKyojin,
	},
	{
		id: 9,
		name: 'Bleach',
		imageUrl: Bleach,
	},
	{
		id: 10,
		name: 'Kimetsu No Yaiba',
		imageUrl: KimetsuNoYaiba,
	},
];

const AnimesPage = () => {
	const navigate = useNavigate();

	const handleItemClick = (itemId) => {
		console.log(`Navigating to /${itemId}/chat`);
		navigate(`/${itemId}/chat`);
	};

	return (
		<Container>
			<Banner>
				<Title>Animes</Title>
			</Banner>
			<Content>
				{animes.map((anime) => (
					<Element key={anime.id} onClick={() => handleItemClick(anime.id)}>
						<img src={anime.imageUrl} alt={anime.name} />
						<Text>
							<p>{anime.name}</p>
						</Text>
					</Element>
				))}
			</Content>
		</Container>
	);
};

export default AnimesPage;

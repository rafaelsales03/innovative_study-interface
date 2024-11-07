import { useNavigate } from 'react-router-dom';
import CategoryAnimes from '../../assets/CategoryAnimes.jpg';
import CategoryBooks from '../../assets/CategoryBooks.jpg';
import CategoryMatters from '../../assets/CategoryMatters.jpg';
import CategoryMovies from '../../assets/CategoryMovies.jpg';
import BannerHome from '../../assets/bannerHome.jpg';

import { Banner, Category, Container, Content } from './styles';
export function Home() {
	const categories = [
		{
			id: 1,
			name: 'Animes',
			imageUrl: CategoryAnimes,
			path: '/animes',
		},
		{
			id: 2,
			name: 'Livros',
			imageUrl: CategoryBooks,
			path: '/livros',
		},
		{
			id: 3,
			name: 'Matérias',
			imageUrl: CategoryMatters,
			path: '/materias',
		},
		{
			id: 4,
			name: 'Filmes',
			imageUrl: CategoryMovies,
			path: '/filmes',
		},
	];
	const navigate = useNavigate();

	return (
		<Container>
			<Banner>
				<img src={BannerHome} alt="banner-home" />
			</Banner>
			<Content>
				{categories.map((category) => (
					<Category key={category.id} onClick={() => navigate(category.path)}>
						<img src={category.imageUrl} alt={category.name} />
						<p>{category.name}</p>
					</Category>
				))}
			</Content>
		</Container>
	);
}

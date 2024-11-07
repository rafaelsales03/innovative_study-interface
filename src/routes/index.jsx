import { createBrowserRouter } from 'react-router-dom';
import AnimesPage from '../ListCategories/AnimesPage';
import BooksPage from '../ListCategories/BooksPage';
import MattersPage from '../ListCategories/MattersPage';
import MoviesPage from '../ListCategories/MoviesPage';
import Chat from '../components/Chat';
import { Home } from '../containers/Home';
import { Login } from '../containers/Login';
import { Register } from '../containers/Register';
export const router = createBrowserRouter([
	{
		path: '/',
		element: <Home />,
	},
	{
		path: '/login',
		element: <Login />,
	},

	{
		path: '/cadastro',
		element: <Register />,
	},
	{
		path: '/animes',
		element: <AnimesPage />,
	},
	{
		path: '/livros',
		element: <BooksPage />,
	},

	{
		path: '/materias',
		element: <MattersPage />,
	},

	{
		path: '/filmes',
		element: <MoviesPage />,
	},
	{
		path: '/:itemId/chat',
		element: <Chat />,
	},
]);

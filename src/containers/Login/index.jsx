import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import * as yup from 'yup';

import Logo from '../../assets/logo.png';
import { Button } from '../../components/Button';
import { api } from '../../services/api';
import { Container, Content, Form, InputContainer, Link } from './styles';

export function Login() {
	const navigate = useNavigate();

	const schema = yup
		.object({
			email: yup
				.string()
				.email('Digite um e-mail válido')
				.required('O e-mail é obrigatório'),
			password: yup
				.string()
				.min(6, 'A senha deve ter pelo menos 6 caracteres')
				.required('A senha é obrigatório'),
		})
		.required();

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({
		resolver: yupResolver(schema),
	});
	const onSubmit = async (data) => {
		const {
			data: { token },
		} = await toast.promise(
			api.post('/session', {
				email: data.email,
				password: data.password,
			}),
			{
				pending: 'Verificando seus dados',
				success: {
					render() {
						setTimeout(() => {
							navigate('/');
						}, 2000);
						return 'Seja Bem-vindo(a) 👌';
					},
				},
				error: 'Email ou Senha Incorretos 🤯',
			},
		);

		localStorage.setItem('token', token);
	};

	return (
		<Container>
			<Content>
				<img src={Logo} alt="logo-do-site" />
				<Form onSubmit={handleSubmit(onSubmit)}>
					<InputContainer>
						<label htmlFor="email">Email</label>
						<input id="email" type="email" {...register('email')} />
						<p>{errors?.email?.message}</p>
					</InputContainer>

					<InputContainer>
						<label htmlFor="password">Senha</label>
						<input id="password" type="password" {...register('password')} />
						<p>{errors?.password?.message}</p>
					</InputContainer>

					<Button type="submit">Entrar</Button>
				</Form>

				<p>
					Não possui conta? <Link to="/cadastro">Clique aqui.</Link>
				</p>
			</Content>
		</Container>
	);
}

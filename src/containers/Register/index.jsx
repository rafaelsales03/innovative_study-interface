import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import * as yup from 'yup';

import { Button } from '../../components/Button';
import { api } from '../../services/api';
import {
	Container,
	Content,
	Form,
	InputContainer,
	Link,
	Title,
} from './styles';

export function Register() {
	const navigate = useNavigate();
	const schema = yup
		.object({
			name: yup.string().required('O nome é Obrigatório'),
			email: yup
				.string()
				.email('Digite um e-mail válido')
				.required('O e-mail é obrigatório'),
			password: yup
				.string()
				.min(6, 'A senha deve ter pelo menos 6 caracteres')
				.required('A senha é obrigatório'),
			confirmPassword: yup
				.string()
				.oneOf([yup.ref('password')], 'As senhas devem ser iguais')
				.required('Confirme sua senha'),
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
		try {
			const { status } = await api.post(
				'/users',
				{
					name: data.name,
					email: data.email,
					password: data.password,
				},
				{
					validateStatus: () => true,
				},
			);

			if (status === 200 || status === 201) {
				setTimeout(() => {
					navigate('/login');
				}, 2000);
				toast.success('Conta criada com sucesso!');
			} else if (status === 409) {
				toast.error('Email já Cadastrado! Faça o Login para Continuar');
			} else {
				throw new Error();
			}
		} catch (error) {
			toast.error('😭 Falha no Sistema! Tente novamente');
		}
	};

	return (
		<Container>
			<Content>
				<Title>Criar Conta</Title>

				<Form onSubmit={handleSubmit(onSubmit)}>
					<InputContainer>
						<label htmlFor="name">Nome</label>
						<input id="name" type="text" {...register('name')} />
						<p>{errors?.name?.message}</p>
					</InputContainer>

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

					<InputContainer>
						<label htmlFor="confirmPassword">Confirmar Senha</label>
						<input
							id="confirmPassword"
							type="password"
							{...register('confirmPassword')}
						/>
						<p>{errors?.confirmPassword?.message}</p>
					</InputContainer>

					<Button type="submit">Criar Conta</Button>
				</Form>

				<p>
					Já possui conta? <Link to="/login">Clique aqui.</Link>
				</p>
			</Content>
		</Container>
	);
}

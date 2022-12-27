import './login.css';
import Logo from '../../components/Logo';
import InputContainer from '../../components/InputContainer';
import Button from '../../components/Button';
import { useState } from 'react';
import { auth } from '../../services/firebaseConnection';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { AiOutlineHome } from 'react-icons/ai';

export default function Login() {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState();
	const navigate = useNavigate();
	async function handleLogin(e) {
		e.preventDefault();
		if (email === '' || password === '') {
			toast.error('E-mail ou senha inválidos');
			return;
		}
		signInWithEmailAndPassword(auth, email, password)
			.then(() => {
				navigate('/admin', { replace: true });
			})
			.catch(() => {
				toast.error('E-mail ou senha inválidos');
			});
	}

	return (
		<div className="login-container">
			<Logo />
			<form action="" className="form" onSubmit={handleLogin}>
				<InputContainer
					type="email"
					labeltext="E-mail:"
					placeholder="Digite seu e-mail"
					value={email}
					onChange={(e) => setEmail(e.target.value)}
					required
				/>
				<InputContainer
					type="password"
					labeltext="Senha:"
					placeholder="Digite sua senha"
					value={password}
					onChange={(e) => setPassword(e.target.value)}
					required
				/>
				<Button type="submit">Acessar</Button>
			</form>
			<Link
				to="/"
				style={{
					marginTop: 14,
					color: '#FFF',
					display: 'flex',
					alignItems: 'center',
					gap: '.5rem',
				}}
			>
				<AiOutlineHome size={18} color="#FFF" />
				Voltar á pagina home
			</Link>
		</div>
	);
}

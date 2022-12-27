import { Link } from 'react-router-dom';
import './error.css';
import Logo from '../../components/Logo';

export default function Error() {
	return (
		<div className="error">
			<Logo />
			<h1>Página não encontrada</h1>
			<Link to="/" className="link">
				Retornar a página principal
			</Link>
		</div>
	);
}

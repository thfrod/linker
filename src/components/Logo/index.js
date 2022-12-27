import { Link } from 'react-router-dom';
import './logo.css';
export default function Logo() {
	return (
		<Link to="/">
			<h1 className="logo">
				Dev<span className="logo__text">Linker</span>
			</h1>
		</Link>
	);
}

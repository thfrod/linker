import './header.css';
import { BiLogOut } from 'react-icons/bi';
import { Link } from 'react-router-dom';

import { auth } from '../../services/firebaseConnection';
import { signOut } from 'firebase/auth';
import { toast } from 'react-toastify';

export default function Header() {
	async function handleLogout() {
		await signOut(auth);
		toast.success('Logout realizado com sucesso');
	}
	return (
		<header className="header">
			<nav className="header__nav">
				<button onClick={handleLogout}>
					<BiLogOut size={28} color="#DB2629" />
				</button>
				<Link to="/admin">Links</Link>
				<Link to="/admin/social">Redes sociais</Link>
			</nav>
		</header>
	);
}

import './home.css';
import { Social } from '../../components/Social';
import { FaLinkedin, FaGithub, FaMediumM } from 'react-icons/fa';
export default function Home() {
	return (
		<div className="home-container">
			<h1>Thfrod.dev</h1>
			<span>Veja meus links 👇</span>

			<main className="links">
				<section className="link-area">
					<a href="">
						<p className="link-area__text">Meu site</p>
					</a>
				</section>
				<section className="link-area">
					<a href="">
						<p className="link-area__text">Meu site</p>
					</a>
				</section>
				<section className="link-area">
					<a href="">
						<p className="link-area__text">Meu site</p>
					</a>
				</section>
				<footer>
					<Social url="https://medium.com/@thfrod">
						<FaMediumM size={35} color="#FFF" />
					</Social>
					<Social url="https://github.com/thfrod">
						<FaGithub size={35} color="#FFF" />
					</Social>
					<Social url="https://www.linkedin.com/in/thfrod/">
						<FaLinkedin size={35} color="#FFF" />
					</Social>
				</footer>
			</main>
		</div>
	);
}

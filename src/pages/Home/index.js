import './home.css';
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
			</main>
		</div>
	);
}

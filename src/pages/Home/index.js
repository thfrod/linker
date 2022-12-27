import './home.css';
import { Social } from '../../components/Social';
import { FaLinkedin, FaGithub, FaMediumM } from 'react-icons/fa';
import { useState, useEffect } from 'react';
import {
	getDocs,
	collection,
	orderBy,
	query,
	doc,
	getDoc,
} from 'firebase/firestore';
import { db } from '../../services/firebaseConnection';
import { toast } from 'react-toastify';

export default function Home() {
	const [links, setLinks] = useState([]);
	const [socialLinks, setSocialLinks] = useState({});
	useEffect(() => {
		function loadLinks() {
			const linksRef = collection(db, 'links');
			const queryRef = query(linksRef, orderBy('createdAt', 'asc'));
			getDocs(queryRef)
				.then((snapshot) => {
					let linksList = [];
					snapshot.forEach((doc) => {
						linksList.push({
							id: doc.id,
							name: doc.data().name,
							url: doc.data().url,
							bg: doc.data().bg,
							color: doc.data().color,
						});
					});
					setLinks(linksList);
				})
				.catch((e) => {
					console.log(e);
					toast.warning('Erro ao buscar links');
				});
		}
		loadLinks();
	}, []);
	useEffect(() => {
		function loadSocialLinks() {
			const docRef = doc(db, 'social', 'link');
			getDoc(docRef).then((snapshot) => {
				if (snapshot.data() !== undefined) {
					setSocialLinks({
						medium: snapshot.data().medium,
						github: snapshot.data().github,
						linkedin: snapshot.data().linkedin,
					});
				}
			});
		}
		loadSocialLinks();
	}, []);
	return (
		<div className="home-container">
			<h1>Thfrod.dev</h1>
			<span>Veja meus links 👇</span>

			<main className="links">
				{links.map((item) => (
					<section
						key={item.id}
						className="link-area"
						style={{ backgroundColor: item.bg }}
					>
						<a href={item.url} target="_blank" rel="noreferrer noopener">
							<p className="link-area__text" style={{ color: item.color }}>
								{item.name}
							</p>
						</a>
					</section>
				))}

				{links.length !== 0 && Object.keys(socialLinks).length && (
					<footer>
						<Social url={socialLinks?.medium}>
							<FaMediumM size={35} color="#FFF" />
						</Social>
						<Social url={socialLinks?.github}>
							<FaGithub size={35} color="#FFF" />
						</Social>
						<Social url={socialLinks?.linkedin}>
							<FaLinkedin size={35} color="#FFF" />
						</Social>
					</footer>
				)}
			</main>
		</div>
	);
}

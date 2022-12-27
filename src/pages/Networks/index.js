import Header from '../../components/Header';
import InputContainer from '../../components/InputContainer';
import Button from '../../components/Button';
import { MdAddLink } from 'react-icons/md';
import { useState, useEffect } from 'react';
import { db } from '../../services/firebaseConnection';
// eslint-disable-next-line no-unused-vars
import { setDoc, doc, getDoc } from 'firebase/firestore';
import { toast } from 'react-toastify';

export default function Networks() {
	const [medium, setMedium] = useState('');
	const [github, setGithub] = useState('');
	const [linkedin, setLinkedin] = useState('');
	useEffect(() => {
		function loadLinks() {
			const docRef = doc(db, 'social', 'link');
			getDoc(docRef)
				.then((snapshot) => {
					if (snapshot !== undefined) {
						setMedium(snapshot.data().medium);
						setGithub(snapshot.data().github);
						setLinkedin(snapshot.data().linkedin);
					}
				})
				.catch((err) => {
					console.log(err);
					toast.error('Erro ao carregar links');
				});
		}
		loadLinks();
	}, []);
	async function handleSave(e) {
		e.preventDefault();
		setDoc(doc(db, 'social', 'link'), {
			medium: medium,
			github: github,
			linkedin: linkedin,
		})
			.then(() => {
				toast.success('Link cadastrado com sucesso');
			})
			.catch(() => {
				toast.error(
					'Algo deu errado na hora de cadastrar seus links. Tente novamente mais tarde.'
				);
			});
	}
	return (
		<div className="admin-container">
			<Header />
			<h1 className="title">Suas redes sociais</h1>
			<form action="" className="form" onSubmit={handleSave}>
				<label htmlFor=""></label>
				<InputContainer
					type="url"
					value={medium}
					onChange={(e) => setMedium(e.target.value)}
					labeltext="Link do Medium"
					placeholder="Digite a URL do Medium:"
				/>
				<InputContainer
					type="url"
					value={github}
					onChange={(e) => setGithub(e.target.value)}
					labeltext="Link do Github"
					placeholder="Digite a URL do Github:"
				/>
				<InputContainer
					type="url"
					value={linkedin}
					onChange={(e) => setLinkedin(e.target.value)}
					labeltext="Link do LinkedIn"
					placeholder="Digite a URL do LinkedIn:"
				/>
				<Button type="submit">
					Cadastrar links
					<MdAddLink size={24} color="#FFF" />
				</Button>
			</form>
		</div>
	);
}

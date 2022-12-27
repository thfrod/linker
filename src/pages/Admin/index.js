/* eslint-disable no-unused-vars */
import { useState } from 'react';
import './admin.css';
import Header from '../../components/Header';
import Logo from '../../components/Logo';
import InputContainer from '../../components/InputContainer';
import Button from '../../components/Button';
import { MdAddLink } from 'react-icons/md';
import { FiTrash2 } from 'react-icons/fi';
import { db } from '../../services/firebaseConnection';
import {
	addDoc,
	collection,
	onSnapshot,
	query,
	orderBy,
	doc,
	deleteDoc,
} from 'firebase/firestore';

import { toast } from 'react-toastify';

export default function Admin() {
	const [nameInput, setNameInput] = useState('');
	const [urlInput, setUrlInput] = useState('');
	const [backgroundColorInput, setBackgroundColorInput] = useState('#f1f1f1');
	const [textColorInput, setTextColorInput] = useState('#121212');

	async function handleRegister(e) {
		e.preventDefault();
		if (nameInput == '' || urlInput == '') {
			toast.warn('Dados inválidos');
			return;
		}

		addDoc(collection(db, 'links'), {
			name: nameInput,
			url: urlInput,
			bg: backgroundColorInput,
			color: textColorInput,
			createdAt: new Date(),
		})
			.then(() => {
				setNameInput('');
				setUrlInput('');
				setBackgroundColorInput('');
				setTextColorInput('');
				toast.success('Link cadastrado com sucesso');
			})
			.catch((e) => {
				toast.error(
					'Algo deu errado na hora de cadastrar seus links. Tente novamente mais tarde.'
				);
				console.log(e);
			});
	}

	return (
		<div className="admin-container">
			<Header />
			<Logo />
			<form action="" className="form" onSubmit={handleRegister}>
				<InputContainer
					labeltext="Nome do link"
					placeholder="Digite o nome do link"
					type="text"
					value={nameInput}
					onChange={(e) => setNameInput(e.target.value)}
				/>
				<InputContainer
					labeltext="URL do link"
					placeholder="Digite a URL do link"
					type="url"
					value={urlInput}
					onChange={(e) => setUrlInput(e.target.value)}
				/>
				<section className="container-colors">
					<div>
						<label
							htmlFor="background-color-link"
							className="container-colors__label right"
						>
							Fundo do link
						</label>
						<input
							type="color"
							name="backgroud-color-link"
							id="backgroud-color-link"
							value={backgroundColorInput}
							onChange={(e) => setBackgroundColorInput(e.target.value)}
						/>
					</div>

					<div>
						<label
							htmlFor="text-color-link-link"
							className="container-colors__label right"
						>
							Cor do link
						</label>
						<input
							type="color"
							name="text-color-link"
							id="text-color-link"
							value={textColorInput}
							onChange={(e) => setTextColorInput(e.target.value)}
						/>
					</div>
				</section>

				{nameInput !== '' && (
					<div className="preview">
						<label htmlFor="" className="container-colors__label">
							Veja como está ficando 👇
						</label>
						<article
							className="list"
							style={{
								marginBottom: 8,
								marginTop: 8,
								backgroundColor: backgroundColorInput,
							}}
						>
							<p style={{ color: textColorInput }}>{nameInput}</p>
						</article>
					</div>
				)}

				<Button type="submit">
					Cadastrar
					<MdAddLink size={24} color="#FFF" />
				</Button>
			</form>

			<h2 className="title">Meus Links</h2>

			<article
				className="list animate-pop"
				style={{ backgroundColor: '#000', color: '#FFF' }}
			>
				<p>Meu link</p>
				<div>
					<button className="button-delete">
						<FiTrash2 size={18} color="#fff" />
					</button>
				</div>
			</article>
		</div>
	);
}

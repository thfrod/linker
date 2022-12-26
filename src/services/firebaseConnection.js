import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
	apiKey: 'AIzaSyAzRWjLttAIRg6Zg2iTk6OgOFg7WIIrEBE',
	authDomain: 'devlinker-4d0b8.firebaseapp.com',
	projectId: 'devlinker-4d0b8',
	storageBucket: 'devlinker-4d0b8.appspot.com',
	messagingSenderId: '538402084132',
	appId: '1:538402084132:web:954c60d6ac354d4dc54fb1',
	measurementId: 'G-XX7ZH50G5E',
};

const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp);

export { db, auth };

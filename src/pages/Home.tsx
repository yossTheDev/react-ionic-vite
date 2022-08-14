import React, { useState } from 'react';
import {
	IonButton,
	IonButtons,
	IonContent,
	IonHeader,
	IonLabel,
	IonMenuButton,
	IonPage,
	IonTitle,
	IonToolbar,
} from '@ionic/react';

import reactLogo from '../assets/react.svg';

const Home: React.FC = () => {
	const [count, setCount] = useState(0);

	return (
		<IonPage>
			<IonHeader>
				<IonToolbar>
					<IonButtons slot="start">
						<IonMenuButton></IonMenuButton>
					</IonButtons>
					<IonTitle className=" text-start">Ionic App</IonTitle>
				</IonToolbar>
			</IonHeader>
			<IonContent fullscreen>
				<div className="container mx-auto relative -translate-y-1/2 top-1/2">
					<img className=" h-40 m-2 mx-auto" src={reactLogo} />
					<IonLabel>Counter:</IonLabel>
					<p>{count}</p>
					<IonButton onClick={() => setCount(count + 1)}>HOME</IonButton>
				</div>
			</IonContent>
		</IonPage>
	);
};

export default Home;

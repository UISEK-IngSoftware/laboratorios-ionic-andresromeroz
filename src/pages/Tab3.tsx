import { IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import './Tab3.css';

const Tab3: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Perfil</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Perfil</IonTitle>
          </IonToolbar>
        </IonHeader>
        <div className="card-container">
          <IonCard className='card'>
            <div className="img-container">
              <img src="https://avatars.githubusercontent.com/u/79285823?v=4" alt="Profile Image" />
            </div>
            <IonCardHeader>
              <IonCardTitle>Andrés Romero</IonCardTitle>
              <IonCardSubtitle>Ingeniero de Software</IonCardSubtitle>
            </IonCardHeader>
            <IonCardContent>
              <p>Hola. Soy un ingeniero de software. Me encanta trabajar con tecnologías innovadoras.</p>
            </IonCardContent>
          </IonCard>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Tab3;

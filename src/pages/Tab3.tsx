import { IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonContent, IonHeader, IonPage, IonTitle, IonToolbar, useIonViewWillEnter } from '@ionic/react';
import './Tab3.css';
import { useState } from 'react';
import { GithubUser } from '../interfaces/GithubUser';
import { getUserInfo } from '../services/GitHubService';
import LoadingSpinner from '../components/LoadingSpinner';

const Tab3: React.FC = () => {
  const [userInfo, setUserInfo] = useState<GithubUser | null>(null);
  const [loading, setLoading] = useState(false);

  const loadUserInfo = async () => {
    setLoading(true);
    const userData = await getUserInfo();
    setUserInfo(userData);
    setLoading(false);
  };

  useIonViewWillEnter(() => {
    loadUserInfo();
  });

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
          {userInfo && (
            <IonCard className='card'>
              <div className="img-container">
                <img src={userInfo.avatar_url} alt={userInfo.name} />
              </div>
              <IonCardHeader>
                <IonCardTitle>{userInfo.name}</IonCardTitle>
                <IonCardSubtitle>{userInfo.login}</IonCardSubtitle>
              </IonCardHeader>
              <IonCardContent>
                <p>{userInfo.bio}</p>
              </IonCardContent>
            </IonCard>
          )}
        </div>
        <LoadingSpinner isOpen={loading} />
      </IonContent>
    </IonPage>
  );
};

export default Tab3;

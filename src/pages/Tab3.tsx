import { IonButton, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonContent, IonHeader, IonIcon, IonPage, IonTitle, IonToolbar, useIonViewWillEnter } from '@ionic/react';
import './Tab3.css';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { logOutOutline } from 'ionicons/icons';
import { GithubUser } from '../interfaces/GithubUser';
import { getUserInfo } from '../services/GitHubService';
import AuthService from '../services/AuthService';
import LoadingSpinner from '../components/LoadingSpinner';

const Tab3: React.FC = () => {
  const [userInfo, setUserInfo] = useState<GithubUser | null>(null);
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  const loadUserInfo = async () => {
    setLoading(true);
    const userData = await getUserInfo();
    setUserInfo(userData);
    setLoading(false);
  };

  useIonViewWillEnter(() => {
    loadUserInfo();
  });

  const handleLogout = () => {
    AuthService.logout();
    history.push('/login');
  };

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
          <IonButton expand="block" color="danger" onClick={handleLogout}>
            <IonIcon slot="start" icon={logOutOutline} />
            Salir
          </IonButton>
        </div>
        <LoadingSpinner isOpen={loading} />
      </IonContent>
    </IonPage>
  );
};

export default Tab3;

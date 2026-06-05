import { IonContent, IonHeader, IonList, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import './Tab1.css';
import RepoItem from '../components/RepoItem';

const Tab1: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Repositorios</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Repositorios</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonList>
          <RepoItem
            name="Repositorio 1"
            description="Descripción del repositorio 1"
            language="JavaScript"
            avatarUrl="https://www.analog.com/en/_/media/analog/en/design-center/ltspice/ltspice-keyboard-shortcuts.jpg?rev=080794899c62450c9b85f57472303975&sc_lang=en">
          </RepoItem>
          <RepoItem
            name="Repositorio 2"
            description="Descripción del repositorio 2"
            language="Python"
            avatarUrl="https://www.analog.com/en/_/media/analog/en/design-center/ltspice/ltspice-tips-and-articles.jpg?rev=d88780b9dba14d028869226180aa8928&sc_lang=en">
          </RepoItem>
          <RepoItem
            name="Repositorio 3"
            description="Descripción del repositorio 3"
            language="Java"
            avatarUrl="https://www.analog.com/en/_/media/analog/en/design-center/ltspice/ltcspice-getstarted.jpg?rev=2c87b9f0f0684ba48a534aa7383b82c8&sc_lang=en">
          </RepoItem>
          <RepoItem
            name="Repositorio 4"
            description="Descripción del repositorio 4"
            language="C#"
            avatarUrl="https://www.analog.com/en/_/media/analog/en/design-center/ltspice/spotlight-ltspice-essentials.jpg?rev=48213a23b7944840b95f2549799e768c&sc_lang=en">
          </RepoItem>
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default Tab1;

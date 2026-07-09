import { IonButton, IonContent, IonHeader, IonInput, IonPage, IonText, IonTextarea, IonTitle, IonToolbar, useIonViewWillEnter } from '@ionic/react';
import './Tab2.css';
import { useState } from 'react';
import { useHistory } from 'react-router';
import { RepositoryPayload } from '../interfaces/RepositoryPayload';
import { createRepository } from '../services/GitHubService';
import LoadingSpinner from '../components/LoadingSpinner';

const Tab2: React.FC = () => {
  const history = useHistory();
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [repoFormData, setRepoFormData] = useState<RepositoryPayload>({
    name: '',
    description: ''
  });

  const setFormName = (value: string) => {
    setRepoFormData(prev => ({ ...prev, name: value }));
  };

  const setFormDescription = (value: string) => {
    setRepoFormData(prev => ({ ...prev, description: value }));
  };

  const saveRepository = async () => {
    if (!repoFormData.name || !repoFormData.description) {
      setErrorMsg('El nombre y la descripción del repositorio son obligatorios.');
      return;
    }
    setLoading(true);
    createRepository(repoFormData).then((newRepo) => {
      if (newRepo) {
        setRepoFormData({ name: '', description: '' });
        history.push('/tab1', { newRepo });
      } else {
        setErrorMsg('Ocurrió un error al crear el repositorio.');
      }
    }).finally(() => {
      setLoading(false);
    });
  };

  useIonViewWillEnter(() => {
    setErrorMsg("");
  });

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Formulario</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Formulario</IonTitle>
          </IonToolbar>
        </IonHeader>
        <div className="form-container">
          <IonInput
            className='form-field'
            placeholder="Ingrese nombre del repositorio"
            label="Nombre"
            labelPlacement='floating'
            value={repoFormData.name}
            onIonChange={(e) => setFormName(e.detail.value!)}
          />
          <IonTextarea
            className='form-field'
            placeholder="Ingrese descripción del repositorio"
            label="Descripción"
            labelPlacement='floating'
            rows={6}
            value={repoFormData.description}
            onIonChange={(e) => setFormDescription(e.detail.value!)}
          />
          {errorMsg !== "" && <IonText color="danger">{errorMsg}</IonText>}
          <IonButton
            className='form-field'
            expand="block"
            fill='solid'
            onClick={saveRepository}
          >
            Guardar
          </IonButton>
        </div>
        <LoadingSpinner isOpen={loading} />
      </IonContent>
    </IonPage>
  );
};

export default Tab2;

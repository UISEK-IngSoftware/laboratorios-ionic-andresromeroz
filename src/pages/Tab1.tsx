import { IonContent, IonHeader, IonList, IonPage, IonTitle, IonToast, IonToolbar, useIonAlert, useIonViewWillEnter } from '@ionic/react';
import './Tab1.css';
import RepoItem from '../components/RepoItem';
import { useState } from 'react';
import { Repository } from '../interfaces/Repository';
import { fetchRepositories, updateRepository, deleteRepository } from '../services/GitHubService';
import LoadingSpinner from '../components/LoadingSpinner';

const Tab1: React.FC = () => {
  const [repos, setRepos] = useState<Repository[]>([]);
  const [loading, setLoading] = useState(false);
  const [toastMsg, setToastMsg] = useState("");
  const [presentAlert] = useIonAlert();

  const loadRepos = async () => {
    setLoading(true);
    const response = await fetchRepositories();
    setRepos(response);
    setLoading(false);
  };

  useIonViewWillEnter(() => {
    loadRepos();
  });

  const handleEdit = (repo: Repository) => {
    presentAlert({
      header: 'Editar repositorio',
      inputs: [
        {
          name: 'name',
          type: 'text',
          value: repo.name,
          placeholder: 'Nuevo nombre'
        },
        {
          name: 'description',
          type: 'text',
          value: repo.description,
          placeholder: 'Nueva descripción'
        }
      ],
      buttons: [
        { text: 'Cancelar', role: 'cancel' },
        {
          text: 'Guardar',
          handler: (data) => {
            setLoading(true);
            updateRepository(`${repo.owner.login}/${repo.name}`, {
              name: data.name,
              description: data.description
            }).then((updated) => {
              if (updated) {
                setToastMsg('Repositorio actualizado correctamente');
                loadRepos();
              }
            }).finally(() => setLoading(false));
          }
        }
      ]
    });
  };

  const handleDelete = (repo: Repository) => {
    presentAlert({
      header: 'Confirmar eliminación',
      message: `¿Seguro que deseas eliminar "${repo.name}"? Esta acción no se puede deshacer.`,
      buttons: [
        { text: 'Cancelar', role: 'cancel' },
        {
          text: 'Eliminar',
          role: 'destructive',
          handler: () => {
            setLoading(true);
            deleteRepository(`${repo.owner.login}/${repo.name}`).then((success) => {
              if (success) {
                setToastMsg('Repositorio eliminado');
                setRepos((prev) => prev.filter((r) => r.id !== repo.id));
              }
            }).finally(() => setLoading(false));
          }
        }
      ]
    });
  };

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
          {repos.map(repo => (
            <RepoItem
              key={repo.id}
              {...repo}
              onEdit={handleEdit}
              onDelete={handleDelete}
            />
          ))}
        </IonList>
        <LoadingSpinner isOpen={loading} />
        <IonToast
          isOpen={!!toastMsg}
          message={toastMsg}
          duration={2000}
          onDidDismiss={() => setToastMsg('')}
        />
      </IonContent>
    </IonPage>
  );
};

export default Tab1;

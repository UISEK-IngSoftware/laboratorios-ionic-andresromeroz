import "./RepoItem.css";
import { IonIcon, IonItem, IonItemOption, IonItemOptions, IonItemSliding, IonLabel, IonThumbnail } from '@ionic/react';
import { pencil, trash } from 'ionicons/icons';
import { Repository } from "../interfaces/Repository";

interface RepoItemProps extends Repository {
  onEdit: (repo: Repository) => void;
  onDelete: (repo: Repository) => void;
}

const RepoItem: React.FC<RepoItemProps> = (props) => {
  const { onEdit, onDelete, ...repo } = props;
  const { name, description, language, owner } = repo;

  return (
    <IonItemSliding>
      <IonItem>
        <IonThumbnail slot='start'>
          <img src={owner.avatar_url} alt={name} />
        </IonThumbnail>
        <IonLabel>
          <h2>{name}</h2>
          <p>{description}</p>
          <p>Lenguaje: {language}</p>
        </IonLabel>
      </IonItem>

      <IonItemOptions>
        <IonItemOption onClick={() => onEdit(repo)}>
          <IonIcon icon={pencil} slot='icon-only'></IonIcon>
        </IonItemOption>
        <IonItemOption color={'danger'} onClick={() => onDelete(repo)}>
          <IonIcon icon={trash} slot='icon-only'></IonIcon>
        </IonItemOption>
      </IonItemOptions>
    </IonItemSliding>
  );
}

export default RepoItem;
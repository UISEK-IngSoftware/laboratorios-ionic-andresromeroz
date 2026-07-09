import "./RepoItem.css";
import { IonIcon, IonItem, IonItemOption, IonItemOptions, IonItemSliding, IonLabel, IonThumbnail } from '@ionic/react';
import { pencil, trash } from 'ionicons/icons';
import { Repository } from "../interfaces/Repository";

const RepoItem: React.FC<Repository> = ({ name, description, language, owner }) => {
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
        <IonItemOption>
          <IonIcon icon={pencil} slot='icon-only'></IonIcon>
        </IonItemOption>
        <IonItemOption color={'danger'}>
          <IonIcon icon={trash} slot='icon-only'></IonIcon>
        </IonItemOption>
      </IonItemOptions>
    </IonItemSliding>
  );
}

export default RepoItem;
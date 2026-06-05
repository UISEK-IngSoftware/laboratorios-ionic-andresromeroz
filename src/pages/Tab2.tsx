import { IonButton, IonContent, IonHeader, IonInput, IonPage, IonTextarea, IonTitle, IonToolbar } from '@ionic/react';
import './Tab2.css';

const Tab2: React.FC = () => {
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
          />
          <IonTextarea
            className='form-field'
            placeholder="Ingrese descripción del repositorio"
            label="Descripción"
            labelPlacement='floating'
            rows={6}
          />
          <IonButton
            className='form-field'
            expand="block"
            fill='solid'
          >
            Guardar
          </IonButton>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Tab2;

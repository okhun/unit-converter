import { IonButton, IonContent, IonPage } from "@ionic/react";
import { useState } from "react";
import Pressure from "./pressure";
import Force from "./force";
import Work from "./work";
import Power from "./power";
const Science: React.FC = () => {
  const [showstatus, setStatus] = useState(0);
  return (
    <IonPage>
      <IonContent>
        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
            backgroundColor: "grey",
          }}
        >
          <IonButton
            color={showstatus === 0 ? "secondary" : "primary"}
            onClick={() => {
              setStatus(0);
            }}
          >
            Pressure
          </IonButton>
          <IonButton
            color={showstatus === 1 ? "secondary" : "primary"}
            onClick={() => {
              setStatus(1);
            }}
          >
            Force
          </IonButton>
          <IonButton
            color={showstatus === 2 ? "secondary" : "primary"}
            onClick={() => {
              setStatus(2);
            }}
          >
            Work
          </IonButton>
          <IonButton
            color={showstatus === 3 ? "secondary" : "primary"}
            onClick={() => {
              setStatus(3);
            }}
          >
            Power
          </IonButton>
        </div>
        {showstatus === 0 ? (
          <Pressure></Pressure>
        ) : showstatus === 1 ? (
          <Force></Force>
        ) : showstatus === 2 ? (
          <Work></Work>
        ) : (
          <Power></Power>
        )}
      </IonContent>
    </IonPage>
  );
};

export default Science;

import { IonButton, IonContent, IonPage } from "@ionic/react";
import { useState } from "react";
import Length from "./length";
import Area from "./area";
import Weight from "./weight";
import Volume from "./volume";
const Basic: React.FC = () => {
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
            Length
          </IonButton>
          <IonButton
            color={showstatus === 1 ? "secondary" : "primary"}
            onClick={() => {
              setStatus(1);
            }}
          >
            Area
          </IonButton>
          <IonButton
            color={showstatus === 2 ? "secondary" : "primary"}
            onClick={() => {
              setStatus(2);
            }}
          >
            Weight
          </IonButton>
          <IonButton
            color={showstatus === 3 ? "secondary" : "primary"}
            onClick={() => {
              setStatus(3);
            }}
          >
            Volume
          </IonButton>
        </div>
        {showstatus === 0 ? (
          <Length></Length>
        ) : showstatus === 1 ? (
          <Area></Area>
        ) : showstatus === 2 ? (
          <Weight></Weight>
        ) : (
          <Volume></Volume>
        )}
      </IonContent>
    </IonPage>
  );
};

export default Basic;

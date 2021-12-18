import { IonButton, IonContent, IonPage } from "@ionic/react";
import { useState } from "react";
import Currency from "./currency";
import Speed from "./speed";
import Temp from "./temp";
import Time from "./time";
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
            Currency
          </IonButton>
          <IonButton
            color={showstatus === 1 ? "secondary" : "primary"}
            onClick={() => {
              setStatus(1);
            }}
          >
            Temp
          </IonButton>
          <IonButton
            color={showstatus === 2 ? "secondary" : "primary"}
            onClick={() => {
              setStatus(2);
            }}
          >
            Time
          </IonButton>
          <IonButton
            color={showstatus === 3 ? "secondary" : "primary"}
            onClick={() => {
              setStatus(3);
            }}
          >
            Speed
          </IonButton>
        </div>
        {showstatus === 0 ? (
          <Currency></Currency>
        ) : showstatus === 1 ? (
          <Temp></Temp>
        ) : showstatus === 2 ? (
          <Time></Time>
        ) : (
          <Speed></Speed>
        )}
      </IonContent>
    </IonPage>
  );
};

export default Basic;

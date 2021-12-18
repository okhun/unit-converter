import { IonButton, IonContent, IonPage } from "@ionic/react";
import { useState } from "react";
import Angle from "./angle";
import Data from "./data";
import Fuel from "./fuel";
import Cooking from "./cooking";
const Misc: React.FC = () => {
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
            Angle
          </IonButton>
          <IonButton
            color={showstatus === 1 ? "secondary" : "primary"}
            onClick={() => {
              setStatus(1);
            }}
          >
            Data
          </IonButton>
          <IonButton
            color={showstatus === 2 ? "secondary" : "primary"}
            onClick={() => {
              setStatus(2);
            }}
          >
            Fuel
          </IonButton>
          <IonButton
            color={showstatus === 3 ? "secondary" : "primary"}
            onClick={() => {
              setStatus(3);
            }}
          >
            Cooking
          </IonButton>
        </div>
        {showstatus === 0 ? (
          <Angle></Angle>
        ) : showstatus === 1 ? (
          <Data></Data>
        ) : showstatus === 2 ? (
          <Fuel></Fuel>
        ) : (
          <Cooking></Cooking>
        )}
      </IonContent>
    </IonPage>
  );
};

export default Misc;

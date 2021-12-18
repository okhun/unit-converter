import {
  IonButton,
  IonContent,
  IonHeader,
  IonPage,
  IonSlide,
  IonSlides,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
// import "./Home.css";
import Basic from "../components/Basic/basic";
import Living from "../components/Living/living";
import Science from "../components/Sience/science";
import Misc from "../components/Misc/misc";
import { useState } from "react";

const Home: React.FC = () => {
  const [colorindex, setColor] = useState(0);
  const [slideOpts, setOpt] = useState({
    initialSlide: 0,
    speed: 400,
  });
  const [events, setEvent] = useState() as any;
  const getIndex = async (event: any) => {
    let ind: number = 0;
    await event.target.getActiveIndex().then((value: any) => (ind = value));
    {
      setColor(ind);
    }
  };
  const changeSlide = async (index: any) => {
    await events.target.slideTo(index, 400);
  };
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Unit converter</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
            backgroundColor: "gray",
          }}
        >
          <IonButton
            expand="full"
            color={colorindex === 0 ? "secondary" : "primary"}
            onClick={() => {
              changeSlide(0);
            }}
          >
            BASIC
          </IonButton>
          <IonButton
            onClick={() => {
              changeSlide(1);
            }}
            expand="full"
            color={colorindex === 1 ? "secondary" : "primary"}
          >
            LIVING
          </IonButton>
          <IonButton
            onClick={() => {
              changeSlide(2);
            }}
            expand="full"
            color={colorindex === 2 ? "secondary" : "primary"}
          >
            SCIENCE
          </IonButton>
          <IonButton
            onClick={() => {
              changeSlide(3);
            }}
            expand="full"
            color={colorindex === 3 ? "secondary" : "primary"}
          >
            MISC.
          </IonButton>
        </div>
        <IonSlides
          onIonSlideDidChange={(e: any) => {
            getIndex(e);
          }}
          onIonSlidesDidLoad={(event: any) => {
            setEvent(event);
          }}
          pager={false}
          options={slideOpts}
          scrollbar={true}
        >
          <IonSlide style={{ height: "500px" }}>
            <Basic></Basic>
          </IonSlide>
          <IonSlide style={{ height: "500px" }}>
            <Living></Living>
          </IonSlide>
          <IonSlide style={{ height: "500px" }}>
            <Science></Science>
          </IonSlide>
          <IonSlide style={{ height: "500px" }}>
            <Misc></Misc>
          </IonSlide>
        </IonSlides>
      </IonContent>
    </IonPage>
  );
};

export default Home;

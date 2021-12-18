import { IonInput, IonSelect, IonSelectOption } from "@ionic/react";
import { useState } from "react";

const Work: React.FC = () => {
  const templength = [
    { value: 1, type: "J" },
    { value: 0.001, type: "kJ" },
    { value: 0.239006, type: "cal" },
    { value: 0.000239, type: "kcal (Cal)" },
    { value: 2.7778e-7, type: "kW*h" },
    { value: 0.101972, type: "kgf*m" },
    { value: 8.850746, type: "in*lbf" },
    { value: 0.737562, type: "ft*lbf" },
    { value: 0.000948, type: "BTU" },
    { value: 2.3885e-11, type: "toe" },
  ];
  const [length, setLength] = useState(templength);
  const [input, setInput] = useState(1);
  const [type, setType] = useState("J");
  const calcLength = (type: any, ...t: any) => {
    let temp = [...templength];
    if (type === "J") {
      for (let i = 0; i < templength.length; i++) {
        temp[i].value = +(templength[i].value * +t[0]).toFixed(
          templength[i].value * +t[0] > 0.000001 ? 6 : 12
        );
        temp[i].type = templength[i].type;
      }
    }
    if (type === "kJ") {
      for (let i = 0; i < templength.length; i++) {
        temp[i].value = +((templength[i].value * +t[0]) / 0.001).toFixed(
          (templength[i].value * +t[0]) / 0.001 > 0.000001 ? 6 : 11
        );
        temp[i].type = templength[i].type;
      }
    }
    if (type === "cal") {
      for (let i = 0; i < templength.length; i++) {
        temp[i].value = +((templength[i].value * +t[0]) / 0.239006).toFixed(
          (templength[i].value * +t[0]) / 0.239006 > 0.000001 ? 6 : 10
        );
        temp[i].type = templength[i].type;
      }
    }
    if (type === "kcal (Cal)") {
      for (let i = 0; i < templength.length; i++) {
        temp[i].value = +((templength[i].value * +t[0]) / 0.000239).toFixed(
          (templength[i].value * +t[0]) / 0.000239 > 0.000001 ? 6 : 10
        );
        temp[i].type = templength[i].type;
      }
    }
    if (type === "kW*h") {
      for (let i = 0; i < templength.length; i++) {
        temp[i].value = +((templength[i].value * +t[0]) / 2.7778e-7).toFixed(
          (templength[i].value * +t[0]) / 2.7778e-7 > 0.000001 ? 6 : 10
        );
        temp[i].type = templength[i].type;
      }
    }
    if (type === "kgf*m") {
      for (let i = 0; i < templength.length; i++) {
        temp[i].value = +((templength[i].value * +t[0]) / 0.101972).toFixed(
          (templength[i].value * +t[0]) / 0.101972 > 0.000001 ? 6 : 10
        );
        temp[i].type = templength[i].type;
      }
    }
    if (type === "in*lbf") {
      for (let i = 0; i < templength.length; i++) {
        temp[i].value = +((templength[i].value * +t[0]) / 8.850746).toFixed(
          (templength[i].value * +t[0]) / 8.850746 > 0.000001 ? 6 : 11
        );
        temp[i].type = templength[i].type;
      }
    }
    if (type === "ft*lbf") {
      for (let i = 0; i < templength.length; i++) {
        temp[i].value = +((templength[i].value * +t[0]) / 0.737562).toFixed(
          (templength[i].value * +t[0]) / 0.737562 > 0.000001 ? 6 : 11
        );
        temp[i].type = templength[i].type;
      }
    }
    if (type === "BTU") {
      for (let i = 0; i < templength.length; i++) {
        temp[i].value = +((templength[i].value * +t[0]) / 0.000948).toFixed(
          (templength[i].value * +t[0]) / 0.000948 > 0.000001 ? 6 : 11
        );
        temp[i].type = templength[i].type;
      }
    }
    if (type === "toe") {
      for (let i = 0; i < templength.length; i++) {
        temp[i].value = +((templength[i].value * +t[0]) / 2.3885e-11).toFixed(
          (templength[i].value * +t[0]) / 2.3885e-11 > 0.000001 ? 6 : 11
        );
        temp[i].type = templength[i].type;
      }
    }
    setLength(temp);
  };
  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
        }}
      >
        <div>
          <IonInput
            onIonChange={(e: any) => {
              setInput(e.target.value);
              calcLength(type, e.target.value);
            }}
            style={{
              border: "1px solid black",
              borderRadius: "7px",
              width: "100%",
            }}
            type="number"
            value={input}
          ></IonInput>
        </div>
        <div>
          <IonSelect
            onIonChange={(e: any) => {
              setType(e.target.value);
              calcLength(e.target.value, input);
            }}
            style={{
              border: "1px solid black",
              borderRadius: "7px",
              width: "100%",
            }}
            okText="Ok"
            cancelText="Cancel"
            placeholder={"J"}
          >
            {length.map((el: any, i: any) => (
              <IonSelectOption key={"key_" + i}>{el.type}</IonSelectOption>
            ))}
          </IonSelect>
        </div>
      </div>
      <div>
        {length.map((el: any, i: any) => (
          <div key={"key" + i}>
            <p>
              {el.value}:{el.type}
            </p>
            <hr style={{ height: "1px", backgroundColor: "black" }} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Work;

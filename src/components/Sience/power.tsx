import { IonInput, IonSelect, IonSelectOption } from "@ionic/react";
import { useState } from "react";

const Power: React.FC = () => {
  const templength = [
    { value: 1, type: "W" },
    { value: 0.001, type: "kW" },
    { value: 0.000001, type: "MW" },
    { value: 0.000239, type: "kcal/s" },
    { value: 0.860421, type: "kcal/h" },
    { value: 0.001341, type: "HP" },
    { value: 0.00136, type: "PS" },
    { value: 3.412142, type: "BTU/h" },
    { value: 0.000285, type: "TR" },
    { value: 0.000102, type: "BHP" },
    { value: 30, type: "dBm" },
  ];
  const [length, setLength] = useState(templength);
  const [input, setInput] = useState(1);
  const [type, setType] = useState("W");
  const calcLength = (type: any, ...t: any) => {
    let temp = [...templength];
    if (type === "W") {
      for (let i = 0; i < templength.length; i++) {
        temp[i].value = +(templength[i].value * +t[0]).toFixed(
          templength[i].value * +t[0] > 0.000001 ? 6 : 11
        );
        temp[i].type = templength[i].type;
      }
    }
    if (type === "kW") {
      for (let i = 0; i < templength.length; i++) {
        temp[i].value = +((templength[i].value * +t[0]) / 0.001).toFixed(
          (templength[i].value * +t[0]) / 0.001 > 0.000001 ? 6 : 11
        );
        temp[i].type = templength[i].type;
      }
    }
    if (type === "MW") {
      for (let i = 0; i < templength.length; i++) {
        temp[i].value = +((templength[i].value * +t[0]) / 0.000001).toFixed(
          (templength[i].value * +t[0]) / 0.000001 > 0.000001 ? 6 : 11
        );
        temp[i].type = templength[i].type;
      }
    }
    if (type === "kcal/s") {
      for (let i = 0; i < templength.length; i++) {
        temp[i].value = +((templength[i].value * +t[0]) / 0.000239).toFixed(
          (templength[i].value * +t[0]) / 0.000239 > 0.000001 ? 6 : 11
        );
        temp[i].type = templength[i].type;
      }
    }
    if (type === "kcal/h") {
      for (let i = 0; i < templength.length; i++) {
        temp[i].value = +((templength[i].value * +t[0]) / 0.860421).toFixed(
          (templength[i].value * +t[0]) / 0.860421 > 0.000001 ? 6 : 11
        );
        temp[i].type = templength[i].type;
      }
    }
    if (type === "HP") {
      for (let i = 0; i < templength.length; i++) {
        temp[i].value = +((templength[i].value * +t[0]) / 0.001341).toFixed(
          (templength[i].value * +t[0]) / 0.001341 > 0.000001 ? 6 : 11
        );
        temp[i].type = templength[i].type;
      }
    }
    if (type === "PS") {
      for (let i = 0; i < templength.length; i++) {
        temp[i].value = +((templength[i].value * +t[0]) / 0.00136).toFixed(
          (templength[i].value * +t[0]) / 0.00136 > 0.000001 ? 6 : 11
        );
        temp[i].type = templength[i].type;
      }
    }
    if (type === "BTU/h") {
      for (let i = 0; i < templength.length; i++) {
        temp[i].value = +((templength[i].value * +t[0]) / 3.412142).toFixed(
          (templength[i].value * +t[0]) / 3.412142 > 0.000001 ? 6 : 11
        );
        temp[i].type = templength[i].type;
      }
    }
    if (type === "TR") {
      for (let i = 0; i < templength.length; i++) {
        temp[i].value = +((templength[i].value * +t[0]) / 0.000285).toFixed(
          (templength[i].value * +t[0]) / 0.000285 > 0.000001 ? 6 : 11
        );
        temp[i].type = templength[i].type;
      }
    }
    if (type === "BHP") {
      for (let i = 0; i < templength.length; i++) {
        temp[i].value = +((templength[i].value * +t[0]) / 0.000102).toFixed(
          (templength[i].value * +t[0]) / 0.000102 > 0.000001 ? 6 : 11
        );
        temp[i].type = templength[i].type;
      }
    }
    if (type === "dBm") {
      for (let i = 0; i < templength.length; i++) {
        temp[i].value = +((templength[i].value * +t[0]) / 30).toFixed(
          (templength[i].value * +t[0]) / 30 > 0.000001 ? 6 : 11
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
            placeholder={"W"}
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

export default Power;

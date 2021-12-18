import { IonInput, IonSelect, IonSelectOption } from "@ionic/react";
import { useState } from "react";

const Speed: React.FC = () => {
  const templength = [
    { value: 1, type: "m/s" },
    { value: 3.28084, type: "ft/s" },
    { value: 0.001, type: "km/s" },
    { value: 60, type: "m/min" },
    { value: 196.850394, type: "ft/min" },
    { value: 0.06, type: "km/min" },
    { value: 3.6, type: "km/h" },
    { value: 2.236936, type: "mi/h (mph)" },
    { value: 1.943844, type: "knot" },
    { value: 0.002941, type: "mach" },
    { value: 16.666667, type: "min/km" },
    { value: 26.8224, type: "min/mile" },
  ];
  const [length, setLength] = useState(templength);
  const [input, setInput] = useState(1);
  const [type, setType] = useState("m/s");
  const calcLength = (type: any, ...t: any) => {
    let temp = [...templength];
    if (type === "m/s") {
      for (let i = 0; i < templength.length - 2; i++) {
        temp[i].value = +(templength[i].value * +t[0]).toFixed(6);
        temp[i].type = templength[i].type;
      }
      temp[10].value = +(templength[10].value / +t[0]).toFixed(6);
      temp[10].type = templength[10].type;
      temp[11].value = +(templength[11].value / +t[0]).toFixed(6);
      temp[11].type = templength[11].type;
    }
    if (type === "ft/s") {
      for (let i = 0; i < templength.length - 2; i++) {
        temp[i].value = +((templength[i].value * +t[0]) / 3.28084).toFixed(6);
        temp[i].type = templength[i].type;
      }
      temp[10].value = +((templength[10].value / +t[0]) * 3.28084).toFixed(6);
      temp[10].type = templength[10].type;
      temp[11].value = +((templength[11].value / +t[0]) * 3.28084).toFixed(6);
      temp[11].type = templength[11].type;
    }
    if (type === "km/s") {
      for (let i = 0; i < templength.length - 2; i++) {
        temp[i].value = +((templength[i].value * +t[0]) / 0.001).toFixed(6);
        temp[i].type = templength[i].type;
      }
      temp[10].value = +((templength[10].value / +t[0]) * 0.001).toFixed(6);
      temp[10].type = templength[10].type;
      temp[11].value = +((templength[11].value / +t[0]) * 0.001).toFixed(6);
      temp[11].type = templength[11].type;
    }
    if (type === "m/min") {
      for (let i = 0; i < templength.length - 2; i++) {
        temp[i].value = +((templength[i].value * +t[0]) / 60).toFixed(6);
        temp[i].type = templength[i].type;
      }
      temp[10].value = +((templength[10].value / +t[0]) * 60).toFixed(6);
      temp[10].type = templength[10].type;
      temp[11].value = +((templength[11].value / +t[0]) * 60).toFixed(6);
      temp[11].type = templength[11].type;
    }
    if (type === "ft/min") {
      for (let i = 0; i < templength.length - 2; i++) {
        temp[i].value = +((templength[i].value * +t[0]) / 196.850394).toFixed(
          6
        );
        temp[i].type = templength[i].type;
      }
      temp[10].value = +((templength[10].value / +t[0]) * 196.850394).toFixed(
        6
      );
      temp[10].type = templength[10].type;
      temp[11].value = +((templength[11].value / +t[0]) * 196.850394).toFixed(
        6
      );
      temp[11].type = templength[11].type;
    }
    if (type === "km/min") {
      for (let i = 0; i < templength.length - 2; i++) {
        temp[i].value = +((templength[i].value * +t[0]) / 0.06).toFixed(6);
        temp[i].type = templength[i].type;
      }
      temp[10].value = +((templength[10].value / +t[0]) * 0.06).toFixed(6);
      temp[10].type = templength[10].type;
      temp[11].value = +((templength[11].value / +t[0]) * 0.06).toFixed(6);
      temp[11].type = templength[11].type;
    }
    if (type === "km/h") {
      for (let i = 0; i < templength.length - 2; i++) {
        temp[i].value = +((templength[i].value * +t[0]) / 3.6).toFixed(6);
        temp[i].type = templength[i].type;
      }
      temp[10].value = +((templength[10].value / +t[0]) * 3.6).toFixed(6);
      temp[10].type = templength[10].type;
      temp[11].value = +((templength[11].value / +t[0]) * 3.6).toFixed(6);
      temp[11].type = templength[11].type;
    }
    if (type === "mi/h (mph)") {
      for (let i = 0; i < templength.length - 2; i++) {
        temp[i].value = +((templength[i].value * +t[0]) / 2.236936).toFixed(6);
        temp[i].type = templength[i].type;
      }
      temp[10].value = +((templength[10].value / +t[0]) * 2.236936).toFixed(6);
      temp[10].type = templength[10].type;
      temp[11].value = +((templength[11].value / +t[0]) * 2.236936).toFixed(6);
      temp[11].type = templength[11].type;
    }
    if (type === "knot") {
      for (let i = 0; i < templength.length - 2; i++) {
        temp[i].value = +((templength[i].value * +t[0]) / 1.943844).toFixed(6);
        temp[i].type = templength[i].type;
      }
      temp[10].value = +((templength[10].value / +t[0]) * 1.943844).toFixed(6);
      temp[10].type = templength[10].type;
      temp[11].value = +((templength[11].value / +t[0]) * 1.943844).toFixed(6);
      temp[11].type = templength[11].type;
    }
    if (type === "mach") {
      for (let i = 0; i < templength.length - 2; i++) {
        temp[i].value = +((templength[i].value * +t[0]) / 0.002941).toFixed(6);
        temp[i].type = templength[i].type;
      }
      temp[10].value = +((templength[10].value / +t[0]) * 0.002941).toFixed(6);
      temp[10].type = templength[10].type;
      temp[11].value = +((templength[11].value / +t[0]) * 0.002941).toFixed(6);
      temp[11].type = templength[11].type;
    }
    if (type === "min/km") {
      for (let i = 0; i < templength.length - 2; i++) {
        temp[i].value = +((templength[i].value / +t[0]) * 16.666667).toFixed(6);
        temp[i].type = templength[i].type;
      }
      temp[10].value = +((templength[10].value * +t[0]) / 16.666667).toFixed(6);
      temp[10].type = templength[10].type;
      temp[11].value = +((templength[11].value * +t[0]) / 16.666667).toFixed(6);
      temp[11].type = templength[11].type;
    }
    if (type === "min/mile") {
      for (let i = 0; i < templength.length - 2; i++) {
        temp[i].value = +((templength[i].value / +t[0]) * 26.8224).toFixed(6);
        temp[i].type = templength[i].type;
      }
      temp[10].value = +((templength[10].value * +t[0]) / 26.8224).toFixed(6);
      temp[10].type = templength[10].type;
      temp[11].value = +((templength[11].value * +t[0]) / 26.8224).toFixed(6);
      temp[11].type = templength[11].type;
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
            placeholder={"m/s"}
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

export default Speed;

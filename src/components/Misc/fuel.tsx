import { IonInput, IonSelect, IonSelectOption } from "@ionic/react";
import { useState } from "react";

const Fuel: React.FC = () => {
  const templength = [
    { value: 1, type: "km/l" },
    { value: 0.621371, type: "mi/l" },
    { value: 3.785412, type: "km/gal (US)" },
    { value: 2.352146, type: "mi/gal (US)" },
    { value: 2.824811, type: "mi/gal (UK)" },
    { value: 100, type: "l/100km" },
  ];
  const [length, setLength] = useState(templength);
  const [input, setInput] = useState(1);
  const [type, setType] = useState("km/l");
  const calcLength = (type: any, ...t: any) => {
    let temp = [...templength];
    if (type === "km/l") {
      for (let i = 0; i < templength.length; i++) {
        if (i === 5) {
          temp[i].value = +(templength[i].value / +t[0]).toFixed(
            templength[i].value * +t[0] > 0.000001 ? 6 : 12
          );
        } else {
          temp[i].value = +(templength[i].value * +t[0]).toFixed(
            templength[i].value * +t[0] > 0.000001 ? 6 : 12
          );
        }
        temp[i].type = templength[i].type;
      }
    }
    if (type === "mi/l") {
      for (let i = 0; i < templength.length; i++) {
        if (i === 5) {
          temp[i].value = +((templength[i].value / +t[0]) * 0.621371).toFixed(
            (templength[i].value * +t[0]) / 0.621371 > 0.000001 ? 6 : 12
          );
        } else {
          temp[i].value = +((templength[i].value * +t[0]) / 0.621371).toFixed(
            (templength[i].value * +t[0]) / 0.621371 > 0.000001 ? 6 : 12
          );
        }
        temp[i].type = templength[i].type;
      }
    }
    if (type === "km/gal (US)") {
      for (let i = 0; i < templength.length; i++) {
        if (i === 5) {
          temp[i].value = +((templength[i].value / +t[0]) * 3.785412).toFixed(
            (templength[i].value * +t[0]) / 3.785412 > 0.000001 ? 6 : 12
          );
        } else {
          temp[i].value = +((templength[i].value * +t[0]) / 3.785412).toFixed(
            (templength[i].value * +t[0]) / 3.785412 > 0.000001 ? 6 : 12
          );
        }
        temp[i].type = templength[i].type;
      }
    }
    if (type === "mi/gal (US)") {
      for (let i = 0; i < templength.length; i++) {
        if (i === 5) {
          temp[i].value = +((templength[i].value / +t[0]) * 2.352146).toFixed(
            (templength[i].value * +t[0]) / 2.352146 > 0.000001 ? 6 : 12
          );
        } else {
          temp[i].value = +((templength[i].value * +t[0]) / 2.352146).toFixed(
            (templength[i].value * +t[0]) / 2.352146 > 0.000001 ? 6 : 12
          );
        }
        temp[i].type = templength[i].type;
      }
    }
    if (type === "mi/gal (UK)") {
      for (let i = 0; i < templength.length; i++) {
        if (i === 5) {
          temp[i].value = +((templength[i].value / +t[0]) * 2.824811).toFixed(
            (templength[i].value * +t[0]) / 2.824811 > 0.000001 ? 6 : 12
          );
        } else {
          temp[i].value = +((templength[i].value * +t[0]) / 2.824811).toFixed(
            (templength[i].value * +t[0]) / 2.824811 > 0.000001 ? 6 : 12
          );
        }
        temp[i].type = templength[i].type;
      }
    }
    if (type === "l/100km") {
      for (let i = 0; i < templength.length; i++) {
        if (i === 5) {
          temp[i].value = +((templength[i].value * +t[0]) / 100).toFixed(
            (templength[i].value * +t[0]) / 100 > 0.000001 ? 6 : 12
          );
        } else {
          temp[i].value = +((templength[i].value / +t[0]) * 100).toFixed(
            (templength[i].value * +t[0]) / 100 > 0.000001 ? 6 : 12
          );
        }
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
            placeholder={"km/l"}
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

export default Fuel;

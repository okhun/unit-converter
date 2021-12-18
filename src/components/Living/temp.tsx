import { IonInput, IonSelect, IonSelectOption } from "@ionic/react";
import { useState } from "react";

const Temp: React.FC = () => {
  const templength = [
    { value: 1, type: "°C" },
    { value: 33.8, type: "°F" },
    { value: 274.15, type: "K" },
    { value: 493.47, type: "°R" },
    { value: 0.8, type: "°Re" },
  ];
  const numb = 6;
  const [length, setLength] = useState(templength);
  const [input, setInput] = useState(1);
  const [type, setType] = useState("°C");
  const calcLength = (type: any, ...t: any) => {
    let temp = [...templength];
    if (type === "°C") {
      temp[0].value = +t[0];
      temp[1].value = +t[0] * (9 / 5) + 32;
      temp[2].value = 273.15 + +t[0];
      temp[3].value = +t[0] * (9 / 5) + 491.67;
      temp[4].value = 0.8 * +t[0];
    }
    if (type === "°F") {
      temp[0].value = +(((+t[0] - 32) * 5) / 9).toFixed(numb);
      temp[1].value = +t[0];
      temp[2].value = +((+t[0] - 32) * (5 / 9) + 273.15).toFixed(numb);
      temp[3].value = +t[0] + 459.67;
      temp[4].value = +((+t[0] - 32) * (4 / 9)).toFixed(numb);
    }
    if (type === "K") {
      temp[0].value = +(t[0] - 273.15).toFixed(numb);
      temp[1].value = +(((+t[0] - 273.15) * 9) / 5 + 32).toFixed(numb);
      temp[2].value = +(+t[0]).toFixed(numb);
      temp[3].value = +t[0] * 1.8;
      temp[4].value = +((+t[0] - 273.15) / 1.25).toFixed(numb);
    }
    if (type === "°R") {
      temp[0].value = +(((t[0] - 491.67) * 5) / 9).toFixed(numb);
      temp[1].value = +(+t[0] - 459.67).toFixed(numb);
      temp[2].value = +((+t[0] * 5) / 9).toFixed(numb);
      temp[3].value = +t[0];
      temp[4].value = +(((+t[0] - 491.67) * 4) / 9).toFixed(numb);
    }
    if (type === "°Re") {
      temp[0].value = +(t[0] * 1.25).toFixed(numb);
      temp[1].value = +(+t[0] * 2.25 + 32).toFixed(numb);
      temp[2].value = +(+t[0] / 0.8 + 273.15).toFixed(numb);
      temp[3].value = +((+t[0] * 9) / 4 + 491.67).toFixed(numb);
      temp[4].value = +(+t[0]).toFixed(numb);
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
            placeholder={"°C"}
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

export default Temp;

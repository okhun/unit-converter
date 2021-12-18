import { IonInput, IonSelect, IonSelectOption } from "@ionic/react";
import { useState } from "react";

const Length: React.FC = () => {
  const templength = [
    { value: 1, type: "m" },
    { value: 1000000, type: "\xB5m" },
    { value: 1000, type: "mm" },
    { value: 100, type: "cm" },
    { value: 10, type: "dm" },
    { value: 39.370079, type: "inch" },
    { value: 3.28084, type: "ft" },
    { value: 1.093613, type: "yd" },
    { value: 0.000621, type: "mile" },
    { value: 0.001, type: "km" },
    { value: 0.00054, type: "NM" },
  ];
  const [length, setLength] = useState(templength);

  const [input, setInput] = useState(1);
  const [type, setType] = useState("m");
  const calcLength = (type: any, ...t: any) => {
    let a = 2.45566788;
    console.log(a.toFixed(3));

    let temp = [...templength];
    if (type === "m") {
      for (let i = 0; i < templength.length; i++) {
        temp[i].value = +(templength[i].value * +t[0]).toFixed(6);
        temp[i].type = templength[i].type;
      }
    }
    if (type === "\xB5m") {
      for (let i = 0; i < templength.length; i++) {
        temp[i].value = +((templength[i].value * +t[0]) / 1000000).toFixed(6);
        temp[i].type = templength[i].type;
      }
    }
    if (type === "mm") {
      for (let i = 0; i < templength.length; i++) {
        temp[i].value = +((templength[i].value * +t[0]) / 1000).toFixed(6);
        temp[i].type = templength[i].type;
      }
    }
    if (type === "cm") {
      for (let i = 0; i < templength.length; i++) {
        temp[i].value = +((templength[i].value * +t[0]) / 100).toFixed(6);
        temp[i].type = templength[i].type;
      }
    }
    if (type === "dm") {
      for (let i = 0; i < templength.length; i++) {
        temp[i].value = +((templength[i].value * +t[0]) / 10).toFixed(6);
        temp[i].type = templength[i].type;
      }
    }
    if (type === "inch") {
      for (let i = 0; i < templength.length; i++) {
        temp[i].value = +((templength[i].value * +t[0]) / 39.370079).toFixed(6);
        temp[i].type = templength[i].type;
      }
    }
    if (type === "ft") {
      for (let i = 0; i < templength.length; i++) {
        temp[i].value = +((templength[i].value * +t[0]) / 3.28084).toFixed(6);
        temp[i].type = templength[i].type;
      }
    }
    if (type === "yd") {
      for (let i = 0; i < templength.length; i++) {
        temp[i].value = +((templength[i].value * +t[0]) / 1.093613).toFixed(6);
        temp[i].type = templength[i].type;
      }
    }
    if (type === "mile") {
      for (let i = 0; i < templength.length; i++) {
        temp[i].value = +((templength[i].value * +t[0]) / 0.000621).toFixed(6);
        temp[i].type = templength[i].type;
      }
    }
    if (type === "km") {
      for (let i = 0; i < templength.length; i++) {
        temp[i].value = +((templength[i].value * +t[0]) / 0.001).toFixed(6);
        temp[i].type = templength[i].type;
      }
    }
    if (type === "NM") {
      for (let i = 0; i < templength.length; i++) {
        temp[i].value = +((templength[i].value * +t[0]) / 0.00054).toFixed(6);
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
            placeholder="m"
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

export default Length;

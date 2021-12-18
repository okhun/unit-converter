import { IonInput, IonSelect, IonSelectOption } from "@ionic/react";
import { useState } from "react";

const Weight: React.FC = () => {
  const templength = [
    { value: 1000000, type: "mm\xB2" },
    { value: 10000, type: "cm\xB2" },
    { value: 100, type: "dm\xB2" },
    { value: 1, type: "m\xB2" },
    { value: 1550.0031, type: "in\xB2" },
    { value: 10.76391, type: "ft\xB2" },
    { value: 1.19599, type: "yd\xB2" },
    { value: 0.01, type: "a" },
    { value: 0.0001, type: "ha" },
    { value: 0.000001, type: "km\xB2" },
    { value: 0.000247, type: "acre" },
    { value: 3.86e-7, type: "mile\xB2" },
  ];
  const numb = 6;
  const [length, setLength] = useState(templength);

  const [input, setInput] = useState(1);
  const [type, setType] = useState("m\xB2");
  const calcLength = (type: any, ...t: any) => {
    let temp = [...templength];
    if (type === "m\xB2") {
      for (let i = 0; i < templength.length; i++) {
        temp[i].value = +(templength[i].value * +t[0]).toFixed(numb);
        temp[i].type = templength[i].type;
      }
    }
    if (type === "mm\xB2") {
      for (let i = 0; i < templength.length; i++) {
        temp[i].value = +((templength[i].value * +t[0]) / 1000000).toFixed(
          numb
        );
        temp[i].type = templength[i].type;
      }
    }
    if (type === "cm\xB2") {
      for (let i = 0; i < templength.length; i++) {
        temp[i].value = +((templength[i].value * +t[0]) / 10000).toFixed(numb);
        temp[i].type = templength[i].type;
      }
    }
    if (type === "dm\xB2") {
      for (let i = 0; i < templength.length; i++) {
        temp[i].value = +((templength[i].value * +t[0]) / 100).toFixed(numb);
        temp[i].type = templength[i].type;
      }
    }
    if (type === "in\xB2") {
      for (let i = 0; i < templength.length; i++) {
        temp[i].value = +((templength[i].value * +t[0]) / 1550.0031).toFixed(
          numb
        );
        temp[i].type = templength[i].type;
      }
    }
    if (type === "ft\xB2") {
      for (let i = 0; i < templength.length; i++) {
        temp[i].value = +((templength[i].value * +t[0]) / 10.76391).toFixed(
          numb
        );
        temp[i].type = templength[i].type;
      }
    }
    if (type === "yd\xB2") {
      for (let i = 0; i < templength.length; i++) {
        temp[i].value = +((templength[i].value * +t[0]) / 1.19599).toFixed(
          numb
        );
        temp[i].type = templength[i].type;
      }
    }
    if (type === "a") {
      for (let i = 0; i < templength.length; i++) {
        temp[i].value = +((templength[i].value * +t[0]) / 0.01).toFixed(numb);
        temp[i].type = templength[i].type;
      }
    }
    if (type === "ha") {
      for (let i = 0; i < templength.length; i++) {
        temp[i].value = +((templength[i].value * +t[0]) / 0.0001).toFixed(numb);
        temp[i].type = templength[i].type;
      }
    }
    if (type === "km\xB2") {
      for (let i = 0; i < templength.length; i++) {
        temp[i].value = +((templength[i].value * +t[0]) / 0.000001).toFixed(
          numb
        );
        temp[i].type = templength[i].type;
      }
    }
    if (type === "acre") {
      for (let i = 0; i < templength.length; i++) {
        temp[i].value = +((templength[i].value * +t[0]) / 0.000247).toFixed(
          numb
        );
        temp[i].type = templength[i].type;
      }
    }
    if (type === "mile\xB2") {
      for (let i = 0; i < templength.length; i++) {
        temp[i].value = +((templength[i].value * +t[0]) / 3.86e-7).toFixed(
          numb
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
            placeholder={"m\xB2"}
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

export default Weight;

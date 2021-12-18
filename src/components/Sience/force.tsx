import { IonInput, IonSelect, IonSelectOption } from "@ionic/react";
import { useState } from "react";

const Force: React.FC = () => {
  const templength = [
    { value: 1, type: "N" },
    { value: 100000, type: "dyn" },
    { value: 0.1, type: "daN" },
    { value: 0.001, type: "kN" },
    { value: 0.101972, type: "kgf" },
    { value: 0.224809, type: "lbf" },
    { value: 0.000225, type: "kip" },
  ];
  const [length, setLength] = useState(templength);
  const [input, setInput] = useState(1);
  const [type, setType] = useState("N");
  const calcLength = (type: any, ...t: any) => {
    let temp = [...templength];
    if (type === "N") {
      for (let i = 0; i < templength.length; i++) {
        temp[i].value = +(templength[i].value * +t[0]).toFixed(
          templength[i].value * +t[0] > 0.000001 ? 6 : 9
        );
        temp[i].type = templength[i].type;
      }
    }
    if (type === "dyn") {
      for (let i = 0; i < templength.length; i++) {
        temp[i].value = +((templength[i].value * +t[0]) / 100000).toFixed(
          (templength[i].value * +t[0]) / 100000 > 0.000001 ? 6 : 11
        );
        temp[i].type = templength[i].type;
      }
    }
    if (type === "daN") {
      for (let i = 0; i < templength.length; i++) {
        temp[i].value = +((templength[i].value * +t[0]) / 0.1).toFixed(
          (templength[i].value * +t[0]) / 0.1 > 0.000001 ? 6 : 11
        );
        temp[i].type = templength[i].type;
      }
    }
    if (type === "kN") {
      for (let i = 0; i < templength.length; i++) {
        temp[i].value = +((templength[i].value * +t[0]) / 0.001).toFixed(
          (templength[i].value * +t[0]) / 0.001 > 0.000001 ? 6 : 11
        );
        temp[i].type = templength[i].type;
      }
    }
    if (type === "kgf") {
      for (let i = 0; i < templength.length; i++) {
        temp[i].value = +((templength[i].value * +t[0]) / 0.101972).toFixed(
          (templength[i].value * +t[0]) / 0.101972 > 0.000001 ? 6 : 11
        );
        temp[i].type = templength[i].type;
      }
    }
    if (type === "lbf") {
      for (let i = 0; i < templength.length; i++) {
        temp[i].value = +((templength[i].value * +t[0]) / 0.224809).toFixed(
          (templength[i].value * +t[0]) / 0.224809 > 0.000001 ? 6 : 11
        );
        temp[i].type = templength[i].type;
      }
    }
    if (type === "kip") {
      for (let i = 0; i < templength.length; i++) {
        temp[i].value = +((templength[i].value * +t[0]) / 0.000225).toFixed(
          (templength[i].value * +t[0]) / 0.000225 > 0.000001 ? 6 : 11
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
            placeholder={"N"}
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

export default Force;

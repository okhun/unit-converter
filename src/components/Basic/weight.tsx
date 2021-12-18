import { IonInput, IonSelect, IonSelectOption } from "@ionic/react";
import { useState } from "react";

const Weight: React.FC = () => {
  const templength = [
    { value: 1000000000, type: "\xB5g" },
    { value: 1000000, type: "mg" },
    { value: 1000, type: "g" },
    { value: 1, type: "kg" },
    { value: 2.204623, type: "lb(pound)" },
    { value: 35.273962, type: "oz" },
    { value: 32.150747, type: "oz t" },
    { value: 15432.3584, type: "grain" },
    { value: 0.001, type: "tonne" },
    { value: 0.000984, type: "ton (UK)" },
    { value: 0.001102, type: "ton (US)" },
    { value: 0.157473, type: "stone (UK)" },
    { value: 5000, type: "carat" },
    { value: 0.019684, type: "cwt" },
  ];
  const [length, setLength] = useState(templength);

  const [input, setInput] = useState(1);
  const [type, setType] = useState("kg");
  const calcLength = (type: any, ...t: any) => {
    let temp = [...templength];
    if (type === "kg") {
      for (let i = 0; i < templength.length; i++) {
        temp[i].value = +(templength[i].value * +t[0]).toFixed(6);
        temp[i].type = templength[i].type;
      }
    }
    if (type === "\xB5g") {
      for (let i = 0; i < templength.length; i++) {
        temp[i].value = +((templength[i].value * +t[0]) / 1000000000).toFixed(
          6
        );
        temp[i].type = templength[i].type;
      }
    }
    if (type === "g") {
      for (let i = 0; i < templength.length; i++) {
        temp[i].value = +((templength[i].value * +t[0]) / 1000).toFixed(6);
        temp[i].type = templength[i].type;
      }
    }
    if (type === "mg") {
      for (let i = 0; i < templength.length; i++) {
        temp[i].value = +((templength[i].value * +t[0]) / 1000000).toFixed(6);
        temp[i].type = templength[i].type;
      }
    }
    if (type === "lb(pound)") {
      for (let i = 0; i < templength.length; i++) {
        temp[i].value = +((templength[i].value * +t[0]) / 2.204623).toFixed(6);
        temp[i].type = templength[i].type;
      }
    }
    if (type === "oz") {
      for (let i = 0; i < templength.length; i++) {
        temp[i].value = +((templength[i].value * +t[0]) / 35.273962).toFixed(6);
        temp[i].type = templength[i].type;
      }
    }
    if (type === "oz t") {
      for (let i = 0; i < templength.length; i++) {
        temp[i].value = +((templength[i].value * +t[0]) / 32.150747).toFixed(6);
        temp[i].type = templength[i].type;
      }
    }
    if (type === "grain") {
      for (let i = 0; i < templength.length; i++) {
        temp[i].value = +((templength[i].value * +t[0]) / 15432.3584).toFixed(
          6
        );
        temp[i].type = templength[i].type;
      }
    }
    if (type === "tonne") {
      for (let i = 0; i < templength.length; i++) {
        temp[i].value = +((templength[i].value * +t[0]) / 0.001).toFixed(6);
        temp[i].type = templength[i].type;
      }
    }
    if (type === "ton (UK)") {
      for (let i = 0; i < templength.length; i++) {
        temp[i].value = +((templength[i].value * +t[0]) / 0.000984).toFixed(6);
        temp[i].type = templength[i].type;
      }
    }
    if (type === "ton (US)") {
      for (let i = 0; i < templength.length; i++) {
        temp[i].value = +((templength[i].value * +t[0]) / 0.001102).toFixed(6);
        temp[i].type = templength[i].type;
      }
    }
    if (type === "stone (UK)") {
      for (let i = 0; i < templength.length; i++) {
        temp[i].value = +((templength[i].value * +t[0]) / 0.157473).toFixed(6);
        temp[i].type = templength[i].type;
      }
    }
    if (type === "cwt") {
      for (let i = 0; i < templength.length; i++) {
        temp[i].value = +((templength[i].value * +t[0]) / 0.019684).toFixed(6);
        temp[i].type = templength[i].type;
      }
    }
    if (type === "carat") {
      for (let i = 0; i < templength.length; i++) {
        temp[i].value = +((templength[i].value * +t[0]) / 5000).toFixed(6);
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
            placeholder="kg"
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

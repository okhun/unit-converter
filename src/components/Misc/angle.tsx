import { IonInput, IonSelect, IonSelectOption } from "@ionic/react";
import { useState } from "react";

const Angle: React.FC = () => {
  const templength = [
    { value: 1000000, type: "ml (cc)" },
    { value: 100000, type: "cl" },
    { value: 10000, type: "dl" },
    { value: 1000, type: "L (litre)" },
    { value: 1000000000, type: "mm\xB3" },
    { value: 1000000, type: "cm\xB3" },
    { value: 1000, type: "dm\xB3" },
    { value: 1, type: "m\xB3" },
    { value: 61023.7441, type: "in\xB3" },
    { value: 35.314667, type: "ft\xB3" },
    { value: 1.307951, type: "yd\xB3" },
    { value: 219.969249, type: "gal (UK)" },
    { value: 264.172052, type: "gal (US)" },
    { value: 6.289811, type: "bbl" },
    { value: 1759.75399, type: "pt (UK)" },
    { value: 2113.37642, type: "pt (US)" },
    { value: 33814.0227, type: "fl oz (US)" },
  ];
  const [length, setLength] = useState(templength);
  const [input, setInput] = useState(1);
  const [type, setType] = useState("m\xB3");
  const calcLength = (type: any, ...t: any) => {
    let temp = [...templength];
    if (type === "m\xB3") {
      for (let i = 0; i < templength.length; i++) {
        temp[i].value = +(templength[i].value * +t[0]).toFixed(6);
        temp[i].type = templength[i].type;
      }
    }
    if (type === "ml (cc)") {
      for (let i = 0; i < templength.length; i++) {
        temp[i].value = +((templength[i].value * +t[0]) / 1000000).toFixed(6);
        temp[i].type = templength[i].type;
      }
    }
    if (type === "cl") {
      for (let i = 0; i < templength.length; i++) {
        temp[i].value = +((templength[i].value * +t[0]) / 100000).toFixed(6);
        temp[i].type = templength[i].type;
      }
    }
    if (type === "dl") {
      for (let i = 0; i < templength.length; i++) {
        temp[i].value = +((templength[i].value * +t[0]) / 10000).toFixed(6);
        temp[i].type = templength[i].type;
      }
    }
    if (type === "L (litre)") {
      for (let i = 0; i < templength.length; i++) {
        temp[i].value = +((templength[i].value * +t[0]) / 1000).toFixed(6);
        temp[i].type = templength[i].type;
      }
    }
    if (type === "mm\xB3") {
      for (let i = 0; i < templength.length; i++) {
        temp[i].value = +((templength[i].value * +t[0]) / 1000000000).toFixed(
          6
        );
        temp[i].type = templength[i].type;
      }
    }
    if (type === "cm\xB3") {
      for (let i = 0; i < templength.length; i++) {
        temp[i].value = +((templength[i].value * +t[0]) / 1000000).toFixed(6);
        temp[i].type = templength[i].type;
      }
    }
    if (type === "dm\xB3") {
      for (let i = 0; i < templength.length; i++) {
        temp[i].value = +((templength[i].value * +t[0]) / 1000).toFixed(6);
        temp[i].type = templength[i].type;
      }
    }
    if (type === "in\xB3") {
      for (let i = 0; i < templength.length; i++) {
        temp[i].value = +((templength[i].value * +t[0]) / 61023.7441).toFixed(
          6
        );
        temp[i].type = templength[i].type;
      }
    }
    if (type === "ft\xB3") {
      for (let i = 0; i < templength.length; i++) {
        temp[i].value = +((templength[i].value * +t[0]) / 35.314667).toFixed(6);
        temp[i].type = templength[i].type;
      }
    }
    if (type === "yd\xB3") {
      for (let i = 0; i < templength.length; i++) {
        temp[i].value = +((templength[i].value * +t[0]) / 1.307951).toFixed(6);
        temp[i].type = templength[i].type;
      }
    }
    if (type === "gal (UK)") {
      for (let i = 0; i < templength.length; i++) {
        temp[i].value = +((templength[i].value * +t[0]) / 219.969249).toFixed(
          6
        );
        temp[i].type = templength[i].type;
      }
    }
    if (type === "gal (US)") {
      for (let i = 0; i < templength.length; i++) {
        temp[i].value = +((templength[i].value * +t[0]) / 264.172052).toFixed(
          6
        );
        temp[i].type = templength[i].type;
      }
    }
    if (type === "bbl") {
      for (let i = 0; i < templength.length; i++) {
        temp[i].value = +((templength[i].value * +t[0]) / 6.289811).toFixed(6);
        temp[i].type = templength[i].type;
      }
    }
    if (type === "pt (UK)") {
      for (let i = 0; i < templength.length; i++) {
        temp[i].value = +((templength[i].value * +t[0]) / 1759.75399).toFixed(
          6
        );
        temp[i].type = templength[i].type;
      }
    }
    if (type === "pt (US)") {
      for (let i = 0; i < templength.length; i++) {
        temp[i].value = +((templength[i].value * +t[0]) / 2113.37642).toFixed(
          6
        );
        temp[i].type = templength[i].type;
      }
    }
    if (type === "fl oz (US)") {
      for (let i = 0; i < templength.length; i++) {
        temp[i].value = +((templength[i].value * +t[0]) / 33814.0227).toFixed(
          6
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
            placeholder={"m\xB3"}
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

export default Angle;

import { IonInput, IonSelect, IonSelectOption } from "@ionic/react";
import { useState } from "react";

const Pressure: React.FC = () => {
  const templength = [
    { value: 1, type: "atm" },
    { value: 101325, type: "Pa" },
    { value: 1013.25, type: "hPa (mbar)" },
    { value: 101.325, type: "kPa" },
    { value: 0.101325, type: "MPa" },
    { value: 1.01325, type: "bar" },
    { value: 14.69595, type: "psi (lbf/in\xB2)" },
    { value: 2116.2168, type: "psf (lbf/ft\xB2)" },
    { value: 0.014696, type: "ksi" },
    { value: 1.033227, type: "kgf/cm\xB2" },
    { value: 10332.27, type: "kgf/m\xB2" },
    { value: 760, type: "mmHg (Torr)" },
    { value: 76, type: "cmHg" },
    { value: 29.92126, type: "inchHg" },
    { value: 10332.2676, type: "mmHO" },
    { value: 1033.22676, type: "cmHO" },
    { value: 406.782189, type: "inchHO" },
    { value: 760000, type: "mTorr" },
  ];
  const [length, setLength] = useState(templength);
  const [input, setInput] = useState(1);
  const [type, setType] = useState("atm");
  const calcLength = (type: any, ...t: any) => {
    let temp = [...templength];
    if (type === "atm") {
      for (let i = 0; i < templength.length; i++) {
        temp[i].value = +(templength[i].value * +t[0]).toFixed(6);
        temp[i].type = templength[i].type;
      }
    }
    if (type === "Pa") {
      for (let i = 0; i < templength.length; i++) {
        temp[i].value = +((templength[i].value * +t[0]) / 101325).toFixed(6);
        temp[i].type = templength[i].type;
      }
    }
    if (type === "hPa (mbar)") {
      for (let i = 0; i < templength.length; i++) {
        temp[i].value = +((templength[i].value * +t[0]) / 1013.25).toFixed(6);
        temp[i].type = templength[i].type;
      }
    }
    if (type === "kPa") {
      for (let i = 0; i < templength.length; i++) {
        temp[i].value = +((templength[i].value * +t[0]) / 101.325).toFixed(6);
        temp[i].type = templength[i].type;
      }
    }
    if (type === "MPa") {
      for (let i = 0; i < templength.length; i++) {
        temp[i].value = +((templength[i].value * +t[0]) / 0.101325).toFixed(6);
        temp[i].type = templength[i].type;
      }
    }
    if (type === "bar") {
      for (let i = 0; i < templength.length; i++) {
        temp[i].value = +((templength[i].value * +t[0]) / 1.01325).toFixed(6);
        temp[i].type = templength[i].type;
      }
    }
    if (type === "psi (lbf/in\xB2)") {
      for (let i = 0; i < templength.length; i++) {
        temp[i].value = +((templength[i].value * +t[0]) / 14.69595).toFixed(6);
        temp[i].type = templength[i].type;
      }
    }
    if (type === "psf (lbf/ft\xB2)") {
      for (let i = 0; i < templength.length; i++) {
        temp[i].value = +((templength[i].value * +t[0]) / 2116.2168).toFixed(6);
        temp[i].type = templength[i].type;
      }
    }
    if (type === "ksi") {
      for (let i = 0; i < templength.length; i++) {
        temp[i].value = +((templength[i].value * +t[0]) / 0.014696).toFixed(6);
        temp[i].type = templength[i].type;
      }
    }
    if (type === "kgf/cm\xB2") {
      for (let i = 0; i < templength.length; i++) {
        temp[i].value = +((templength[i].value * +t[0]) / 1.033227).toFixed(6);
        temp[i].type = templength[i].type;
      }
    }
    if (type === "kgf/m\xB2") {
      for (let i = 0; i < templength.length; i++) {
        temp[i].value = +((templength[i].value * +t[0]) / 10332.27).toFixed(6);
        temp[i].type = templength[i].type;
      }
    }
    if (type === "mmHg (Torr)") {
      for (let i = 0; i < templength.length; i++) {
        temp[i].value = +((templength[i].value * +t[0]) / 760).toFixed(6);
        temp[i].type = templength[i].type;
      }
    }
    if (type === "cmHg") {
      for (let i = 0; i < templength.length; i++) {
        temp[i].value = +((templength[i].value * +t[0]) / 76).toFixed(6);
        temp[i].type = templength[i].type;
      }
    }
    if (type === "inchHg") {
      for (let i = 0; i < templength.length; i++) {
        temp[i].value = +((templength[i].value * +t[0]) / 29.92126).toFixed(6);
        temp[i].type = templength[i].type;
      }
    }
    if (type === "mmHO") {
      for (let i = 0; i < templength.length; i++) {
        temp[i].value = +((templength[i].value * +t[0]) / 10332.2676).toFixed(
          6
        );
        temp[i].type = templength[i].type;
      }
    }
    if (type === "cmHO") {
      for (let i = 0; i < templength.length; i++) {
        temp[i].value = +((templength[i].value * +t[0]) / 1033.22676).toFixed(
          6
        );
        temp[i].type = templength[i].type;
      }
    }
    if (type === "inchHO") {
      for (let i = 0; i < templength.length; i++) {
        temp[i].value = +((templength[i].value * +t[0]) / 406.782189).toFixed(
          6
        );
        temp[i].type = templength[i].type;
      }
    }
    if (type === "mTorr") {
      for (let i = 0; i < templength.length; i++) {
        temp[i].value = +((templength[i].value * +t[0]) / 760000).toFixed(6);
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
            placeholder={"atm"}
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

export default Pressure;

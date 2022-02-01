import { IonInput, IonSelect, IonSelectOption } from "@ionic/react";
import { useState } from "react";

const Data: React.FC = () => {
  const templength = [
    { value: 1, type: "MB" },
    { value: 8000000, type: "bit" },
    { value: 1000000, type: "Byte" },
    { value: 1000, type: "kB" },
    { value: 0.001, type: "GB" },
    { value: 976.5625, type: "KiB" },
    { value: 0.953674, type: "MiB" },
    { value: 0.000931, type: "GiB" },
    { value: 9.0949e-7, type: "TiB" },
    { value: 8.8818e-10, type: "PiB" },
    { value: 8000, type: "kbit/s" },
    { value: 8, type: "Mbit/s" },
    { value: 0.008, type: "Gbit/s" },
    { value: 7812.5, type: "packet" },
    { value: 1953.125, type: "block" },
  ];
  const [length, setLength] = useState(templength);
  const [input, setInput] = useState(1);
  const [type, setType] = useState("MB");
  const calcLength = (type: any, ...t: any) => {
    let temp = [...templength];
    if (type === "MB") {
      for (let i = 0; i < templength.length; i++) {
        temp[i].value = +(templength[i].value * +t[0]).toFixed(
          templength[i].value * +t[0] > 0.000001 ? 6 : 12
        );
        temp[i].type = templength[i].type;
      }
    }
    if (type === "bit") {
      for (let i = 0; i < templength.length; i++) {
        temp[i].value = +((templength[i].value * +t[0]) / 8000000).toFixed(
          (templength[i].value * +t[0]) / 8000000 > 0.000001 ? 6 : 12
        );
        temp[i].type = templength[i].type;
      }
    }
    if (type === "Byte") {
      for (let i = 0; i < templength.length; i++) {
        temp[i].value = +((templength[i].value * +t[0]) / 1000000).toFixed(
          (templength[i].value * +t[0]) / 1000000 > 0.000001 ? 6 : 16
        );
        temp[i].type = templength[i].type;
      }
    }
    if (type === "kB") {
      for (let i = 0; i < templength.length; i++) {
        temp[i].value = +((templength[i].value * +t[0]) / 1000).toFixed(
          (templength[i].value * +t[0]) / 1000 > 0.000001 ? 6 : 12
        );
        temp[i].type = templength[i].type;
      }
    }
    if (type === "GB") {
      for (let i = 0; i < templength.length; i++) {
        temp[i].value = +((templength[i].value * +t[0]) / 0.001).toFixed(
          (templength[i].value * +t[0]) / 0.001 > 0.000001 ? 6 : 12
        );
        temp[i].type = templength[i].type;
      }
    }
    if (type === "KiB") {
      for (let i = 0; i < templength.length; i++) {
        temp[i].value = +((templength[i].value * +t[0]) / 976.5625).toFixed(
          (templength[i].value * +t[0]) / 976.5625 > 0.000001 ? 6 : 12
        );
        temp[i].type = templength[i].type;
      }
    }
    if (type === "MiB") {
      for (let i = 0; i < templength.length; i++) {
        temp[i].value = +((templength[i].value * +t[0]) / 0.953674).toFixed(
          (templength[i].value * +t[0]) / 0.953674 > 0.000001 ? 6 : 12
        );
        temp[i].type = templength[i].type;
      }
    }
    if (type === "GiB") {
      for (let i = 0; i < templength.length; i++) {
        temp[i].value = +((templength[i].value * +t[0]) / 0.000931).toFixed(
          (templength[i].value * +t[0]) / 0.000931 > 0.000001 ? 6 : 12
        );
        temp[i].type = templength[i].type;
      }
    }
    if (type === "TiB") {
      for (let i = 0; i < templength.length; i++) {
        temp[i].value = +((templength[i].value * +t[0]) / 9.0949e-7).toFixed(
          (templength[i].value * +t[0]) / 9.0949e-7 > 0.000001 ? 6 : 12
        );
        temp[i].type = templength[i].type;
      }
    }
    if (type === "PiB") {
      for (let i = 0; i < templength.length; i++) {
        temp[i].value = +((templength[i].value * +t[0]) / 8.8818e-10).toFixed(
          (templength[i].value * +t[0]) / 8.8818e-10 > 0.000001 ? 6 : 12
        );
        temp[i].type = templength[i].type;
      }
    }
    if (type === "kbit/s") {
      for (let i = 0; i < templength.length; i++) {
        temp[i].value = +((templength[i].value * +t[0]) / 8000).toFixed(
          (templength[i].value * +t[0]) / 8000 > 0.000001 ? 6 : 12
        );
        temp[i].type = templength[i].type;
      }
    }
    if (type === "Mbit/s") {
      for (let i = 0; i < templength.length; i++) {
        temp[i].value = +((templength[i].value * +t[0]) / 8).toFixed(
          (templength[i].value * +t[0]) / 8 > 0.000001 ? 6 : 12
        );
        temp[i].type = templength[i].type;
      }
    }
    if (type === "Gbit/s") {
      for (let i = 0; i < templength.length; i++) {
        temp[i].value = +((templength[i].value * +t[0]) / 0.008).toFixed(
          (templength[i].value * +t[0]) / 0.008 > 0.000001 ? 6 : 12
        );
        temp[i].type = templength[i].type;
      }
    }
    if (type === "packet") {
      for (let i = 0; i < templength.length; i++) {
        temp[i].value = +((templength[i].value * +t[0]) / 7812.5).toFixed(
          (templength[i].value * +t[0]) / 7812.5 > 0.000001 ? 6 : 12
        );
        temp[i].type = templength[i].type;
      }
    }
    if (type === "block") {
      for (let i = 0; i < templength.length; i++) {
        temp[i].value = +((templength[i].value * +t[0]) / 1953.125).toFixed(
          (templength[i].value * +t[0]) / 1953.125 > 0.000001 ? 6 : 12
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
            placeholder={"MB"}
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

export default Data;

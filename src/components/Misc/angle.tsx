import { IonInput, IonSelect, IonSelectOption } from "@ionic/react";
import { useState } from "react";

const Angle: React.FC = () => {
  const templength = [
    { value: 1, type: "rad" },
    { value: 206264.806, type: 'sec (")' },
    { value: 3437.74677, type: "min (')" },
    { value: 57.29578, type: "deg (°)" },
    { value: 63.661977, type: "grad" },
    { value: 0.159155, type: "circle" },
    { value: 1018.59164, type: "6400 mil" },
    { value: 954.929659, type: "6000 mil" },
    // { value: 155.740772, type: "%" },
  ];
  const [length, setLength] = useState(templength);
  const [input, setInput] = useState(1);
  const [type, setType] = useState("rad");
  const calcLength = (type: any, ...t: any) => {
    let temp = [...templength];
    if (type === "rad") {
      for (let i = 0; i < templength.length; i++) {
        temp[i].value = +(templength[i].value * +t[0]).toFixed(
          templength[i].value * +t[0] > 0.000001 ? 6 : 12
        );
        temp[i].type = templength[i].type;
      }
    }
    if (type === 'sec (")') {
      for (let i = 0; i < templength.length; i++) {
        temp[i].value = +((templength[i].value * +t[0]) / 206264.806).toFixed(
          (templength[i].value * +t[0]) / 206264.806 > 0.000001 ? 6 : 12
        );
        temp[i].type = templength[i].type;
      }
    }
    if (type === "min (')") {
      for (let i = 0; i < templength.length; i++) {
        temp[i].value = +((templength[i].value * +t[0]) / 3437.74677).toFixed(
          (templength[i].value * +t[0]) / 3437.74677 > 0.000001 ? 6 : 12
        );
        temp[i].type = templength[i].type;
      }
    }
    if (type === "deg (°)") {
      for (let i = 0; i < templength.length; i++) {
        temp[i].value = +((templength[i].value * +t[0]) / 57.29578).toFixed(
          (templength[i].value * +t[0]) / 57.29578 > 0.000001 ? 6 : 12
        );
        temp[i].type = templength[i].type;
      }
    }
    if (type === "grad") {
      for (let i = 0; i < templength.length; i++) {
        temp[i].value = +((templength[i].value * +t[0]) / 63.661977).toFixed(
          (templength[i].value * +t[0]) / 63.661977 > 0.000001 ? 6 : 12
        );
        temp[i].type = templength[i].type;
      }
    }
    if (type === "circle") {
      for (let i = 0; i < templength.length; i++) {
        temp[i].value = +((templength[i].value * +t[0]) / 0.159155).toFixed(
          (templength[i].value * +t[0]) / 0.159155 > 0.000001 ? 6 : 12
        );
        temp[i].type = templength[i].type;
      }
    }
    if (type === "6400 mil") {
      for (let i = 0; i < templength.length; i++) {
        temp[i].value = +((templength[i].value * +t[0]) / 1018.59164).toFixed(
          (templength[i].value * +t[0]) / 1018.59164 > 0.000001 ? 6 : 12
        );
        temp[i].type = templength[i].type;
      }
    }
    if (type === "6000 mil") {
      for (let i = 0; i < templength.length; i++) {
        temp[i].value = +((templength[i].value * +t[0]) / 954.929659).toFixed(
          (templength[i].value * +t[0]) / 954.929659 > 0.000001 ? 6 : 12
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
            placeholder={"rad"}
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

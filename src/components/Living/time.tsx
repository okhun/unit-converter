import { IonInput, IonSelect, IonSelectOption } from "@ionic/react";
import { useState } from "react";

const Time: React.FC = () => {
  const numb = 6;
  const templength = [
    { value: 1, type: "ms" },
    { value: 0.001, type: "sec" },
    { value: 0.000017, type: "min" },
    { value: 2.7778e-7, type: "hour" },
    { value: 1.1574e-8, type: "day" },
    { value: 1.6534e-9, type: "week" },
    { value: 3.8052e-10, type: "month" },
    { value: 3.171e-11, type: "year" },
  ];
  const [length, setLength] = useState(templength);
  const [input, setInput] = useState(1);
  const [type, setType] = useState("ms");
  const calcLength = (type: any, ...t: any) => {
    let temp = [...templength];
    if (type === "ms") {
      temp[0].value = t[0];
      temp[1].value = +(t[0] * 0.001).toFixed(numb);
      temp[2].value = +(t[0] / 60000).toFixed(numb);
      temp[3].value = +(t[0] / 3600000).toFixed(numb);
      if (t[0] >= 87) {
        temp[4].value = +(t[0] / (3600000 * 24)).toFixed(6);
      } else {
        temp[4].value = +(t[0] / (3600000 * 24)).toFixed(11);
      }
      if (t[0] <= 600) {
        temp[5].value = +(t[0] / (3600000 * 24 * 7)).toFixed(12);
      } else {
        temp[5].value = +(t[0] / (3600000 * 24 * 7)).toFixed(9);
      }

      temp[6].value = +(t[0] / (3600000 * 24 * 30.416667)).toFixed(12);
      temp[7].value = +(t[0] / (3600000 * 24 * 365)).toFixed(13);
    }
    if (type === "sec") {
      temp[0].value = t[0] * 1000;
      temp[1].value = +(+t[0]).toFixed(numb);
      temp[2].value = +(t[0] / 60).toFixed(numb);
      temp[3].value = +(t[0] / 3600).toFixed(numb);
      if (t[0] >= 87) {
        temp[4].value = +(t[0] / (3600 * 24)).toFixed(6);
      } else {
        temp[4].value = +(t[0] / (3600 * 24)).toFixed(6);
      }
      if (t[0] <= 600) {
        temp[5].value = +(t[0] / (3600 * 24 * 7)).toFixed(6);
      } else {
        temp[5].value = +(t[0] / (3600 * 24 * 7)).toFixed(6);
      }

      temp[6].value = +(t[0] / (3600 * 24 * 30.416667)).toFixed(6);
      temp[7].value = +(t[0] / (3600 * 24 * 365)).toFixed(6);
    }
    if (type === "min") {
      temp[0].value = t[0] * 60000;
      temp[1].value = +(+t[0] * 60).toFixed(numb);
      temp[2].value = +(+t[0]).toFixed(numb);
      temp[3].value = +(t[0] / 60).toFixed(numb);
      if (t[0] >= 87) {
        temp[4].value = +(t[0] / (60 * 24)).toFixed(6);
      } else {
        temp[4].value = +(t[0] / (60 * 24)).toFixed(6);
      }
      if (t[0] <= 600) {
        temp[5].value = +(t[0] / (60 * 24 * 7)).toFixed(6);
      } else {
        temp[5].value = +(t[0] / (60 * 24 * 7)).toFixed(6);
      }

      temp[6].value = +(t[0] / (60 * 24 * 30.416667)).toFixed(6);
      temp[7].value = +(t[0] / (60 * 24 * 365)).toFixed(6);
    }
    if (type === "hour") {
      temp[0].value = t[0] * 3600000;
      temp[1].value = +(+t[0] * 3600).toFixed(numb);
      temp[2].value = +(+t[0] * 60).toFixed(numb);
      temp[3].value = +(+t[0]).toFixed(numb);
      if (t[0] >= 87) {
        temp[4].value = +(t[0] / 24).toFixed(6);
      } else {
        temp[4].value = +(t[0] / 24).toFixed(6);
      }
      if (t[0] <= 600) {
        temp[5].value = +(t[0] / (24 * 7)).toFixed(6);
      } else {
        temp[5].value = +(t[0] / (24 * 7)).toFixed(6);
      }

      temp[6].value = +(t[0] / (24 * 30.416667)).toFixed(6);
      temp[7].value = +(t[0] / (24 * 365)).toFixed(6);
    }
    if (type === "day") {
      temp[0].value = t[0] * 3600000 * 24;
      temp[1].value = +(+t[0] * 3600 * 24).toFixed(numb);
      temp[2].value = +(+t[0] * 60 * 24).toFixed(numb);
      temp[3].value = +(+t[0] * 24).toFixed(numb);
      temp[4].value = +(+t[0]).toFixed(6);
      if (t[0] <= 600) {
        temp[5].value = +(t[0] / 7).toFixed(6);
      } else {
        temp[5].value = +(t[0] / 7).toFixed(6);
      }

      temp[6].value = +(t[0] / 30.416667).toFixed(6);
      temp[7].value = +(t[0] / 365).toFixed(6);
    }
    if (type === "week") {
      temp[0].value = t[0] * 3600000 * 24 * 7;
      temp[1].value = +(+t[0] * 3600 * 24 * 7).toFixed(numb);
      temp[2].value = +(+t[0] * 60 * 24 * 7).toFixed(numb);
      temp[3].value = +(+t[0] * 24 * 7).toFixed(numb);
      temp[4].value = +(+t[0] * 7).toFixed(6);
      temp[5].value = +(+t[0]).toFixed(6);
      temp[6].value = +((t[0] / 30.416667) * 7).toFixed(6);
      temp[7].value = +((t[0] / 365) * 7).toFixed(6);
    }
    if (type === "month") {
      temp[0].value = t[0] * 3600000 * 24 * 30.416667;
      temp[1].value = +(+t[0] * 3600 * 24 * 30.416667).toFixed(numb);
      temp[2].value = +(+t[0] * 60 * 24 * 30.416667).toFixed(numb);
      temp[3].value = +(+t[0] * 24 * 30.416667).toFixed(numb);
      temp[4].value = +(+t[0] * 30).toFixed(6);
      temp[5].value = +((+t[0] / 7) * 30.416667).toFixed(6);
      temp[6].value = +(+t[0]).toFixed(6);
      temp[7].value = +((t[0] / 365) * 30.416667).toFixed(6);
    }
    if (type === "year") {
      temp[0].value = t[0] * 3600000 * 24 * 365;
      temp[1].value = +(+t[0] * 3600 * 24 * 365).toFixed(numb);
      temp[2].value = +(+t[0] * 60 * 24 * 365).toFixed(numb);
      temp[3].value = +(+t[0] * 24 * 365).toFixed(numb);
      temp[4].value = +(+t[0] * 365).toFixed(6);
      temp[5].value = +((+t[0] / 7) * 365).toFixed(6);
      temp[6].value = +((+t[0] / 30.416667) * 365).toFixed(6);
      temp[7].value = +(+t[0]).toFixed(6);
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
            placeholder={"ms"}
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

export default Time;

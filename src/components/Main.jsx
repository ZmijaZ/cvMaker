import { useState } from "react";
import CVForm from "./CV/CVForm";
import emptyCv from "./CV/emptyCv";

const Main = () => {
  const [cv, setCv] = useState(emptyCv);

  const onChangePersonal = (e) => {
    const { name, value } = e.target;

    console.log(`${name}: ${value}`);

    setCv((prevState) => {
      return {
        ...prevState,
        personalInfo: { ...cv.personalInfo, [name]: value },
      };
    });
  };

  const onChangeEducation = (e, id) => {
    const { name, value } = e.target;
    setCv((prevState) => {
      const items = prevState.educationInfo.map((item) => {
        if (item.id !== id) {
          return item;
        } else {
          console.log(`${name}: ${value}`);
          return { ...item, [name]: value };
        }
      });
      return { ...prevState, educationInfo: items };
    });
  };

  return (
    <div>
      <h1>Main part of the app</h1>
      <CVForm
        cv={cv}
        onChangePersonal={onChangePersonal}
        onChangeEducation={onChangeEducation}
      ></CVForm>
    </div>
  );
};

export default Main;

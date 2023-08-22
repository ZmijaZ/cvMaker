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

  return (
    <div>
      <h1>Main part of the app</h1>
      <CVForm cv={cv} onChangePersonal={onChangePersonal}></CVForm>
    </div>
  );
};

export default Main;

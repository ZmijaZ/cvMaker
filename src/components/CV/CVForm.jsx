import PropTypes from "prop-types";
import Personal from "./Personal";

const CVForm = (props) => {
  const { cv, onChangePersonal } = props;

  return (
    <div>
      <h1>Form</h1>
      <Personal
        personalInfo={cv.personalInfo}
        onChange={onChangePersonal}
      ></Personal>
    </div>
  );
};

CVForm.propTypes = {
  cv: PropTypes.object,
  onChangePersonal: PropTypes.func,
};

export default CVForm;

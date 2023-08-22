import PropTypes from "prop-types";
import Personal from "./Personal";
import Education from "./Education";

const CVForm = (props) => {
  const {
    cv,
    onChangePersonal,
    onChangeEducation,
    onDeleteEducation,
    onAddEducation,
  } = props;

  return (
    <div>
      <h1>Form</h1>
      <Personal
        personalInfo={cv.personalInfo}
        onChange={onChangePersonal}
      ></Personal>
      <Education
        educationInfo={cv.educationInfo}
        onChange={onChangeEducation}
        onDelete={onDeleteEducation}
        onAdd={onAddEducation}
      ></Education>
    </div>
  );
};

CVForm.propTypes = {
  cv: PropTypes.object,
  onChangePersonal: PropTypes.func,
  onChangeEducation: PropTypes.func,
  onDeleteEducation: PropTypes.func,
  onAddEducation: PropTypes.func,
};

export default CVForm;

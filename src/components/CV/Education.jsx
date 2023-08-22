import PropTypes from "prop-types";
import EducationItem from "./EducationItem";
import Button from "../utils/Button";

const Education = (props) => {
  const { educationInfo, onChange, onDelete, onAdd } = props;

  let educationItems = educationInfo.map((item) => {
    return (
      <EducationItem
        key={item.id}
        id={item.id}
        education={item}
        onChange={onChange}
        onClick={onDelete}
      ></EducationItem>
    );
  });

  return (
    <div>
      <h1>Education info</h1>
      {educationItems}
      <Button text="+ Add" onClick={onAdd}></Button>
    </div>
  );
};

Education.propTypes = {
  educationInfo: PropTypes.array,
  onChange: PropTypes.func,
  onDelete: PropTypes.func,
  onAdd: PropTypes.func,
};

export default Education;

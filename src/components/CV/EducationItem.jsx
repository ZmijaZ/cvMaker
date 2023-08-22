import PropTypes from "prop-types";
import Input from "../utils/Input";
import Button from "../utils/Button";

const EducationItem = (props) => {
  const { education, onChange, onClick, id } = props;

  return (
    <div>
      <Input
        type="text"
        value={education.company}
        name="company"
        placeholder="Company"
        onChange={(e) => onChange(e, id)}
      ></Input>
      <Input
        type="text"
        value={education.title}
        name="title"
        placeholder="Title"
        onChange={(e) => onChange(e, id)}
      ></Input>
      <Input
        type="text"
        value={education.from}
        name="from"
        placeholder="From"
        onChange={(e) => onChange(e, id)}
      ></Input>
      <Input
        type="text"
        value={education.to}
        name="to"
        placeholder="To"
        onChange={(e) => onChange(e, id)}
      ></Input>

      <Button text={"Delete"} onClick={(e) => onClick(e, id)}></Button>
    </div>
  );
};

EducationItem.propTypes = {
  education: PropTypes.object,
  onChange: PropTypes.func,
  onClick: PropTypes.func,
  id: PropTypes.number,
};

export default EducationItem;

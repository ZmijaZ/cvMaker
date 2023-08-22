import PropTypes from "prop-types";

const Input = (props) => {
  const { type, value, placeholder, name, onChange } = props;

  return (
    <input
      type={type}
      value={value}
      name={name}
      placeholder={placeholder}
      onChange={onChange}
      id={name}
    ></input>
  );
};

Input.propTypes = {
  type: PropTypes.string,
  value: PropTypes.string,
  placeholder: PropTypes.string,
  name: PropTypes.string,
  onChange: PropTypes.func,
};

export default Input;

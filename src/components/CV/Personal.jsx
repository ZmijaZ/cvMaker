import PropTypes from "prop-types";
import Input from "../utils/Input";

const Personal = (props) => {
  const { personalInfo, onChange } = props;

  return (
    <div>
      <h1>Personal</h1>
      <Input
        type="text"
        value={personalInfo.firstName}
        name="firstName"
        placeholder="First name"
        onChange={(e) => onChange(e)}
      ></Input>
      <Input
        type="text"
        value={personalInfo.lastName}
        name="lastName"
        placeholder="Last name"
        onChange={(e) => onChange(e)}
      ></Input>
      <Input
        type="email"
        value={personalInfo.email}
        name="email"
        placeholder="Email"
        onChange={(e) => onChange(e)}
      ></Input>
      <Input
        type="text"
        value={personalInfo.phoneNumber}
        name="phoneNumber"
        placeholder="Phone number"
        onChange={(e) => onChange(e)}
      ></Input>
    </div>
  );
};

Personal.propTypes = {
  personalInfo: PropTypes.object,
  onChange: PropTypes.func,
};

export default Personal;

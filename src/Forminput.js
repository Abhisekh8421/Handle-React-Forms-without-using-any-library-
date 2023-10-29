import { useState } from "react";
import "./styles/FormInput.css";
function Forminput(props) {
  const [focused, setfocused] = useState(false);
  const { label, errorMessage, onChange, id, ...inputprops } = props;
  function handleFocus() {
    setfocused(true);
  }

  return (
    <div className="formInput">
      <label>{label}</label>

      <input
        {...inputprops}
        onChange={onChange}
        onFocus={() =>
          inputprops.name === "confirmPassword" && setfocused(true)
        }
        onBlur={handleFocus}
        focused={focused.toString()}
      />
      <span>{errorMessage}</span>
    </div>
  );
}
export default Forminput;

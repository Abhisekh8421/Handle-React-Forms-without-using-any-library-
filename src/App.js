import { useState } from "react";
import "./styles.css";
import Forminput from "./Forminput";

export default function App() {
  const [values, setvalues] = useState({
    username: "",
    password: "",
    confirmPassword: "",
    email: "",
    birthdayDate: ""
  });
  const inputs = [
    {
      id: 1,
      type: "text",
      name: "username",
      placeholder: "enter your username",
      label: "Username",
      required: true,
      errorMessage: "username atleast contain 3-20 characters ",
      pattern: "^(?=.*[a-zA-Z])[a-zA-Z0-9!@#$%^&*()_+{}[]:;<>,.?~\\-]{8,20}$"
    },
    {
      id: 2,
      type: "password",
      name: "password",
      placeholder: "enter your password",
      required: true,
      label: "Password",
      errorMessage:
        "password should contain 8-10 characters atleast one special character ",
      pattern: "^(?=.*[A-Za-z])(?=.*)(?=.*[@#$%^&+=!]).{8,20}$"
    },
    {
      id: 3,
      type: "password",
      name: "confirmPassword",
      placeholder: "confirm Password",
      required: true,
      label: "confirm password",
      pattern: values.password,
      errorMessage: "password is not matched "
    },
    {
      id: 4,
      type: "email",
      name: "email",
      placeholder: "enter your email",
      required: true,
      label: "email",
      errorMessage: "it should be a valid email address "
    },
    {
      id: 5,
      type: "date",
      name: "birthdayDate",
      placeholder: "enter your birthday",
      label: "enter your Birthday",
      errorMessage: " you must be entered all parameters  "
    }
  ];
  function handleSubmit(e) {
    e.preventDefault();
  }
  function onChange(e) {
    setvalues({ ...values, [e.target.name]: e.target.value });
  }

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <h1>Register</h1>
        {inputs.map((input) => (
          <Forminput
            key={input.id}
            {...input}
            value={values[input.name]}
            onChange={onChange}
            errorMessage={input.errorMessage}
          />
        ))}
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

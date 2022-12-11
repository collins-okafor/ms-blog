import Link from "next/link";
import React, { useState } from "react";
import { Container } from "./styles/signup.styles";
import { FcGoogle } from "react-icons/fc";
import { GoMail } from "react-icons/go";
import { MailContainer } from "./styles/mailSignup";
import { useDispatch } from "react-redux";
import { getLoginPageCounter } from "../../store/actions/authAction";
import AuthService from "../../services/auth";
import Axios from "axios";

const MailSignUp = () => {
  const dispatch = useDispatch();
  const [formValue, setFormValue] = useState({});

  const handleCancel = () => {
    dispatch(getLoginPageCounter({}));
  };
  const handleSignUpOptions = () => {
    dispatch(getLoginPageCounter({ counter: 0 }));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValue({ ...formValue, [name]: value });
  };

  const HandleSubmit = (e) => {
    e.preventDefault();

    console.log(formValue, "our state");
    if (formValue.password === formValue.confirmPassword) {
      AuthService.register({
        email: formValue.email,
        password: formValue.password,
      }).then((data) => {
        console.log(data, "main value");
      });
    } else {
      console.log("wrong value");
    }
  };

  return (
    <MailContainer>
      <button className="cancelButton" onClick={handleCancel}>
        x
      </button>
      <h3>Sign up with email</h3>
      <p>Enter your email address to create an account.</p>
      <div className="inputContainer">
        <label>Your email</label>
        <input
          value={formValue.email}
          type="email"
          name="email"
          onChange={handleChange}
        />
      </div>
      <div className="inputContainer">
        <label>Password</label>
        <input
          value={formValue.password}
          type="password"
          name="password"
          onChange={handleChange}
        />
      </div>
      <div className="inputContainer">
        <label>Confirm Password</label>
        <input
          value={formValue.confirmPassword}
          type="password"
          name="confirmPassword"
          onChange={handleChange}
        />
      </div>
      <button className="signUpButton" onClick={HandleSubmit}>
        Sign up
      </button>
      <button className="signOptions" onClick={handleSignUpOptions}>
        Sign up options ?
      </button>
    </MailContainer>
  );
};

export default MailSignUp;

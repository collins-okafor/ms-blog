import Link from "next/link";
import React, { useState } from "react";
import { Container } from "./styles/signup.styles";
import { FcGoogle } from "react-icons/fc";
import { GoMail } from "react-icons/go";
import { MailContainer } from "./styles/mailSignup";
import { useDispatch } from "react-redux";
import { getLoginPageCounter } from "../../store/actions/authAction";
import AuthService from "../../services.js/auth";

const MailSignIn = () => {
  const dispatch = useDispatch();
  const [formValue, setFormValue] = useState({});

  const handleCancel = () => {
    dispatch(getLoginPageCounter({}));
  };
  const handleSignInOptions = () => {
    dispatch(getLoginPageCounter({ counter: 2 }));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValue({ ...formValue, [name]: value });
  };

  const HandleSubmit = (e) => {
    e.preventDefault();

    AuthService.login(formValue).then((data) => {
      console.log(data);
    });
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
        <input type="email" name="email" onChange={handleChange} />
      </div>
      <div className="inputContainer">
        <label>Password</label>
        <input type="password" name="password" onChange={handleChange} />
      </div>
      <button className="signUpButton" onClick={HandleSubmit}>
        Sign in
      </button>
      <button className="signOptions" onClick={handleSignInOptions}>
        Sign in options ?
      </button>
    </MailContainer>
  );
};

export default MailSignIn;

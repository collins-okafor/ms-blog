import Link from "next/link";
import React from "react";
import { Container } from "./styles/signup.styles";
import { FcGoogle } from "react-icons/fc";
import { GoMail } from "react-icons/go";
import { MailContainer } from "./styles/mailSignup";
import { useDispatch } from "react-redux";
import { getLoginPageCounter } from "../../store.js/actions/authAction";

const MailSignIn = () => {
  const dispatch = useDispatch();

  const handleCancel = () => {
    dispatch(getLoginPageCounter({}));
  };
  const handleSignInOptions = () => {
    dispatch(getLoginPageCounter({ counter: 2 }));
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
        <input type="mail" />
      </div>
      <div className="inputContainer">
        <label>Password</label>
        <input type="mail" />
      </div>
      <button className="signUpButton">Sign in</button>
      <button className="signOptions" onClick={handleSignInOptions}>
        Sign in options ?
      </button>
    </MailContainer>
  );
};

export default MailSignIn;

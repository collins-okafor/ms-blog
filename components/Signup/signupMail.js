import Link from "next/link";
import React from "react";
import { Container } from "./styles/signup.styles";
import { FcGoogle } from "react-icons/fc";
import { GoMail } from "react-icons/go";
import { MailContainer } from "./styles/mailSignup";
const MailSignUp = ({ click }) => {
  return (
    <MailContainer>
      <button className="cancelButton" onClick={click}>
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
      <div className="inputContainer">
        <label>Confirm Password</label>
        <input type="mail" />
      </div>
      <button className="signUpButton">Sign up</button>
    </MailContainer>
  );
};

export default MailSignUp;

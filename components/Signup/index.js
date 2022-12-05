import Link from "next/link";
import React from "react";
import { Container } from "./styles/signup.styles";
import { FcGoogle } from "react-icons/fc";
import { GoMail } from "react-icons/go";
import { useDispatch } from "react-redux";
import { getLoginPageCounter } from "../../store.js/actions/authAction";

const SignUp = () => {
  const dispatch = useDispatch();

  const handleCancel = () => {
    dispatch(getLoginPageCounter({}));
  };

  const handleClick = () => {
    dispatch(getLoginPageCounter({ counter: 1 }));
  };

  const showSignIn = () => {
    dispatch(getLoginPageCounter({ counter: 2 }));
  };

  return (
    <Container>
      <button className="cancelButton" onClick={handleCancel}>
        x
      </button>
      <h3>Join Blogger</h3>
      <button className="signupButton">
        <FcGoogle className="icon" /> Sign up with google
      </button>
      <button className="signupButton" onClick={handleClick}>
        <GoMail className="icon" /> Sign up with email
      </button>
      <div className="account">
        <p>Already have an account?</p>
        <button onClick={showSignIn}>Sign in</button>
      </div>
      <div className="termsAndServices">
        <p>
          Click “Sign Up” to agree to Blogger’s <a href="#">Terms of Service</a>
          and acknowledge that Blogger’s <a href="#">Privacy Policy applies</a>
          to you.
        </p>
      </div>
    </Container>
  );
};

export default SignUp;

import Link from "next/link";
import React from "react";
import { Container } from "./styles/signup.styles";
import { FcGoogle } from "react-icons/fc";
import { GoMail } from "react-icons/go";
import MailSignIn from "./signinMail";
import { getLoginPageCounter } from "../../store.js/actions/authAction";
import { useDispatch } from "react-redux";
const Login = ({ click }) => {
  const dispatch = useDispatch();
  const handleCancel = () => {
    dispatch(getLoginPageCounter({}));
  };

  const handleShowMail = () => {
    dispatch(getLoginPageCounter({ counter: 3 }));
  };
  const showSignUp = () => {
    dispatch(getLoginPageCounter({ counter: 0 }));
  };
  return (
    <Container>
      <button className="cancelButton" onClick={handleCancel}>
        x
      </button>
      <h3>Welcome Back Blogger</h3>
      <button className="signupButton">
        <FcGoogle className="icon" /> Sign In with google
      </button>
      <button className="signupButton" onClick={handleShowMail}>
        <GoMail className="icon" /> Sign In with email
      </button>
      <div className="account">
        <p>No Account ?</p>
        <button onClick={showSignUp}>Create One</button>
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

export default Login;

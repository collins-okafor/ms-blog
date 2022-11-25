import Link from "next/link";
import React from "react";
import { Container } from "./styles/signup.styles";
import { FcGoogle } from "react-icons/fc";
import { GoMail } from "react-icons/go";
const Login = ({ click }) => {
  return (
    <Container>
      <button className="cancelButton" onClick={click}>
        x
      </button>
      <h3>Join Blogger</h3>
      <button className="signupButton">
        <FcGoogle className="icon" /> Sign up with google
      </button>
      <button className="signupButton">
        <GoMail className="icon" /> Sign up with email
      </button>
      <div className="account">
        <p>Already have an account?</p>
        <a href={"#"}>Sign in</a>
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

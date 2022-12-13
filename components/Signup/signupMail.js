import Link from "next/link";
import React, { useState } from "react";
import { Container } from "./styles/signup.styles";
import { FcGoogle } from "react-icons/fc";
import { GoMail } from "react-icons/go";
import { MailContainer } from "./styles/mailSignup";
import { useDispatch, useSelector } from "react-redux";
import { getLoginPageCounter } from "../../store/actions/authAction";
import AuthService from "../../services/auth";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useRouter } from "next/router";
import { AUTHLOADER, LOGINERROR } from "../../store/type";
import LoaderBob from "../../universal-Components/Loaders/loaderBob";

const MailSignUp = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const [loginState, setLoginState] = useState(false);
  const [formValue, setFormValue] = useState({});

  const loginError = useSelector((state) => state.authReducer.LoginError);
  const AuthLoader = useSelector((state) => state.authReducer.AuthLoader);

  const handleCancel = () => {
    dispatch(getLoginPageCounter({}));
    dispatch({ type: LOGINERROR, payload: "" });
    dispatch({ type: AUTHLOADER, payload: false });
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

    dispatch({ type: AUTHLOADER, payload: true });
    console.log(formValue, "our state");
    if (
      formValue.password === formValue.confirmPassword &&
      formValue.password &&
      formValue.confirmPassword &&
      formValue.email &&
      formValue.username
    ) {
      if (formValue?.password?.length >= 6) {
        AuthService.register({
          username: formValue.username,
          email: formValue.email,
          password: formValue.password,
        }).then((data) => {
          if (data?.message === "success") {
            dispatch(getLoginPageCounter({}));

            toast.success(" Account created successfully!", {
              position: toast.POSITION.TOP_RIGHT,
            });

            console.log(data, "main value");
            dispatch({ type: LOGINERROR, payload: "" });
            dispatch({ type: AUTHLOADER, payload: false });
            dispatch(getLoginPageCounter({ counter: 3 }));
          }
        });
      } else {
        toast.error("password length must be greater than or equal 6 !", {
          position: toast.POSITION.TOP_RIGHT,
        });
        dispatch({ type: AUTHLOADER, payload: false });
      }
    } else {
      console.log("wrong value");
      toast.error("All inputs are required !", {
        position: toast.POSITION.TOP_RIGHT,
      });
      dispatch({ type: AUTHLOADER, payload: false });
    }
  };

  return (
    <MailContainer>
      <button className="cancelButton" onClick={handleCancel}>
        x
      </button>
      <div className="errors">{loginError && <p>{loginError}</p>}</div>
      <h3>Sign up with email</h3>
      <p>Enter your email address to create an account.</p>

      <div className="inputContainer">
        <label>Username</label>
        <input
          value={formValue.email}
          type="text"
          name="username"
          onChange={handleChange}
        />
      </div>

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
      <button
        disabled={
          AuthLoader ||
          !formValue.username ||
          !formValue.email ||
          !formValue.password ||
          !formValue.confirmPassword
            ? true
            : false
        }
        className="signUpButton"
        onClick={HandleSubmit}
      >
        {AuthLoader ? <LoaderBob /> : <>Sign up </>}
      </button>
      <button className="signOptions" onClick={handleSignUpOptions}>
        Sign up options ?
      </button>
    </MailContainer>
  );
};

export default MailSignUp;

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

const MailSignIn = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const [formValue, setFormValue] = useState({});

  const loginError = useSelector((state) => state.authReducer.LoginError);
  const AuthLoader = useSelector((state) => state.authReducer.AuthLoader);

  const handleCancel = () => {
    dispatch(getLoginPageCounter({}));
    dispatch({ type: LOGINERROR, payload: "" });
    dispatch({ type: AUTHLOADER, payload: false });
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
    dispatch({ type: AUTHLOADER, payload: true });

    if (formValue?.email || formValue?.passwrod) {
      if (formValue?.password.length >= 6) {
        AuthService.login(formValue).then((data) => {
          if (data?.message === "success") {
            console.log(data);

            toast.success(" Account created successfully!", {
              position: toast.POSITION.TOP_RIGHT,
            });

            dispatch({ type: LOGINERROR, payload: "" });
            router.push("/dashboard");
            dispatch(getLoginPageCounter({}));
            dispatch({ type: AUTHLOADER, payload: false });
          }
        });
      } else {
        toast.error("password length must be greater than or equal 6 !", {
          position: toast.POSITION.TOP_RIGHT,
        });
        dispatch({ type: AUTHLOADER, payload: false });
      }
    } else {
      toast.error("user must provide email and password !", {
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
        <label>Your email</label>
        <input type="email" name="email" onChange={handleChange} />
      </div>
      <div className="inputContainer">
        <label>Password</label>
        <input type="password" name="password" onChange={handleChange} />
      </div>
      <button className="signUpButton" onClick={HandleSubmit}>
        {AuthLoader ? <LoaderBob /> : <>Sign in</>}
      </button>
      <button className="signOptions" onClick={handleSignInOptions}>
        Sign in options ?
      </button>
    </MailContainer>
  );
};

export default MailSignIn;

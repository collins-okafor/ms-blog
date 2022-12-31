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
import { IoIosArrowBack } from "react-icons/io";
const MailSignIn = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const [counter, setCounter] = useState(0);
  const [formValue, setFormValue] = useState({ email: "", password: "" });
  const loginError = useSelector((state) => state.authReducer.LoginError);
  const AuthLoader = useSelector((state) => state.authReducer.AuthLoader);

  const handleCounterBack = () => {
    counter < 1 ? setCounter(0) : setCounter((prev) => prev - 1);
  };
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
  const handleCounter = () => {
    let targetValue = formValue?.email;
    counter === 0 && targetValue === ""
      ? setCounter(0)
      : setCounter((prev) => prev + 1);
    // : setCounter((prev) => prev + 1);
    console.log(targetValue, "target value");
  };
  const HandleSubmit = (e) => {
    // e.preventDefault();

    if (formValue?.email || formValue?.passwrod) {
      if (formValue?.password.length >= 6) {
        AuthService.login(formValue).then((data) => {
          if (data?.message === "success") {
            console.log(data);

            toast.success(" Login successfully!", {
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
      {counter > 0 && (
        <button className="backButton" onClick={handleCounterBack}>
          <IoIosArrowBack />
        </button>
      )}
      <button className="cancelButton" onClick={handleCancel}>
        x
      </button>
      <div className="errors">{loginError && <p>{loginError}</p>}</div>
      <h3>Sign in with email</h3>
      <p>Enter your email address and password to login.</p>
      {counter === 0 && (
        <div className="inputContainer">
          <label>Your email</label>
          <input
            type="email"
            name="email"
            value={formValue.email}
            onChange={handleChange}
          />
        </div>
      )}
      {counter === 1 && (
        <div className="inputContainer">
          <label>Password</label>
          <input type="password" name="password" onChange={handleChange} />
        </div>
      )}

      <button
        disabled={
          counter < 1
            ? false
            : AuthLoader || !formValue.email || !formValue.password
            ? true
            : false
        }
        className="signUpButton"
        onClick={() => {
          if (counter < 1) {
            handleCounter();
          } else {
            HandleSubmit();
          }
        }}
      >
        {AuthLoader ? (
          <LoaderBob />
        ) : (
          <>{counter === 1 ? "Sign in" : "continue"}</>
        )}
      </button>
      <button className="signOptions" onClick={handleSignInOptions}>
        Sign in options ?
      </button>
    </MailContainer>
  );
};

export default MailSignIn;

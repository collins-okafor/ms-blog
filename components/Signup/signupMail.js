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
const MailSignUp = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const [counter, setCounter] = useState(0);
  const [loginState, setLoginState] = useState(false);
  const [formValue, setFormValue] = useState({
    email: "",
    username: "",
    password: "",
  });
  const handleCounter = () => {
    if (counter === 0 && formValue.username === "") {
      return setCounter(0);
    } else if (counter === 1 && formValue.email === "") {
      return setCounter(1);
    } else if (counter === 2 && formValue.password === "") {
      return setCounter(2);
    } else {
      setCounter((prev) => prev + 1);
    }
  };
  const handleCounterBack = () => {
    counter < 1 ? setCounter(0) : setCounter((prev) => prev - 1);
  };
  console.log(counter, "counter");

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
    // e.preventDefault();

    dispatch({ type: AUTHLOADER, payload: true });
    console.log(formValue, "our state");
    if (
      formValue.password === formValue.confirmPassword &&
      formValue.password &&
      formValue.confirmPassword &&
      formValue.email &&
      formValue.username
    ) {
      console.log(formValue, "formvalue");
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
      {counter > 0 && (
        <button className="backButton" onClick={handleCounterBack}>
          <IoIosArrowBack />
        </button>
      )}
      <button className="cancelButton" onClick={handleCancel}>
        x
      </button>
      <div className="errors">{loginError && <p>{loginError}</p>}</div>
      <h3>Sign up with email</h3>
      <p>Enter your email address to create an account.</p>
      {/* {formFields.map((fields, id) => (
        <div className="inputContainer" key={id}>
          <label>{fields.label}</label>
          <input
            value={fields.value}
            type={fields.inputType}
            name={fields.name}
            onChange={handleChange}
          />
        </div>
      ))} */}
      {counter === 0 && (
        <div className="inputContainer">
          <label>Username</label>
          <input
            value={formValue.username}
            type="text"
            name="username"
            onChange={handleChange}
          />
        </div>
      )}

      {counter === 1 && (
        <div className="inputContainer">
          <label>Your email</label>
          <input
            value={formValue.email}
            type="email"
            name="email"
            onChange={handleChange}
          />
        </div>
      )}
      {counter === 2 && (
        <div className="inputContainer">
          <label>Password</label>
          <input
            value={formValue.password}
            type="password"
            name="password"
            onChange={handleChange}
          />
        </div>
      )}
      {counter === 3 && (
        <div className="inputContainer">
          <label>Confirm Password</label>
          <input
            value={formValue.confirmPassword}
            type="password"
            name="confirmPassword"
            onChange={handleChange}
          />
        </div>
      )}
      <button
        disabled={
          counter < 3
            ? false
            : AuthLoader ||
              !formValue.username ||
              !formValue.email ||
              !formValue.password ||
              !formValue.confirmPassword
            ? true
            : false
        }
        className="signUpButton"
        onClick={() => {
          if (counter < 3) {
            handleCounter();
          } else {
            HandleSubmit();
          }
        }}
      >
        {AuthLoader ? (
          <LoaderBob />
        ) : (
          <>{counter === 3 ? "Sign up" : "continue"} </>
        )}
      </button>
      <button className="signOptions" onClick={handleSignUpOptions}>
        Sign up options ?
      </button>
    </MailContainer>
  );
};

export default MailSignUp;

// const formFields = [
//   {
//     label: "user name",
//     inputType: "text",
//     value: "username",
//     name: "username",
//   },
//   {
//     label: "your email",
//     inputType: "email",
//     value: formValue.email,
//     name: "email",
//   },
//   {
//     label: "password",
//     inputType: "password",
//     value: formValue.password,
//     name: "password",
//   },
//   {
//     label: "confirm password",
//     inputType: "password",
//     value: formValue.confirmPassword,
//     name: "confirmPassword",
//   },
// ];

import React from "react";
import { useSelector } from "react-redux";
import Modal from "../../universal-Components/modal";
import SignUp from "../Signup";
import Login from "../Signup/login";
import MailSignIn from "../Signup/signinMail";
import MailSignUp from "../Signup/signupMail";
import Search from "./search";
const OpeningModalSwitcher = () => {
  const loginPageCounte = useSelector(
    (state) => state.authReducer.loginPageCounter
  );

  console.log(loginPageCounte.counter, "our state");

  switch (loginPageCounte.counter) {
    case 0:
      return (
        <Modal display={true}>
          <SignUp />
        </Modal>
      );

    case 1:
      return (
        <Modal display={true}>
          <MailSignUp />
        </Modal>
      );
    case 2:
      return (
        <Modal display={true}>
          <Login />
        </Modal>
      );
    case 3:
      return (
        <Modal display={true}>
          <MailSignIn />
        </Modal>
      );
    case 4:
      return (
        <Modal display={true}>
          <Search />
        </Modal>
      );
    default:
      return "";
  }
};

export default OpeningModalSwitcher;

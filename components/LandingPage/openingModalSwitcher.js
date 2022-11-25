import React from "react";
import { useSelector } from "react-redux";
import Modal from "../../universal-Components/modal";
import SignUp from "../Signup";
import MailSignUp from "../Signup/signupMail";

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

    default:
      return "";
  }
};

export default OpeningModalSwitcher;

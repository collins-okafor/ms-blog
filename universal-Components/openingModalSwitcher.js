import React from "react";
import { useSelector } from "react-redux";
import Modal from "./modal";
import SignUp from "../components/Signup";
import Login from "../components/Signup/login";
import MailSignIn from "../components/Signup/signinMail";
import MailSignUp from "../components/Signup/signupMail";
import Search from "../components/LandingPage/search";
import EditProfile from "../components/editprofile";
const OpeningModalSwitcher = () => {
  const loginPageCounte = useSelector(
    (state) => state.authReducer.loginPageCounter
  );

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
    case 5:
      return <EditProfile />;
    default:
      return "";
  }
};

export default OpeningModalSwitcher;

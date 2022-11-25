import Image from "next/image";
import React, { memo } from "react";
import Logo from "../../assets/Icons/Blogger-logo-01.webp";
import { NavUpLayer } from "./styles/navUpLayer";
import { withTheme } from "styled-components";
import SystemMode from "../../components/SystemMode";
import { FaSearch } from "react-icons/fa";
import { FiMenu } from "react-icons/fi";
import { useDispatch } from "react-redux";
import { getShowHideSidebar } from "../../store.js/actions/landingPageAction";

const UpLayerNav = () => {
  const dispatch = useDispatch();

  const handleSidebar = () => {
    dispatch(getShowHideSidebar(true));
  };

  return (
    <NavUpLayer>
      <div className="menu" onClick={handleSidebar}>
        <FiMenu className="menuIcon" />
      </div>
      <div className="navUpLayerLogo">
        <Image src={Logo} alt={"logo"} />
      </div>
      <div className="navUpLayerLogoAuth">
        <div className="LowerNavDetails">
          <div className="LowerNavDetailsModeSection">
            <SystemMode />
          </div>
          <div className="LowerNavDetailsSearchIconBody">
            <FaSearch className="LowerNavDetailsSearchIcon" />
          </div>
        </div>

        <div className="navUpLayerLogoAuthSystem">
          <button className="navUpLayerLogoAuthSignIn">Sign In</button>
          <button className="navUpLayerLogoAuthGetStarted">Get Started</button>
        </div>
      </div>
    </NavUpLayer>
  );
};

export default memo(UpLayerNav);

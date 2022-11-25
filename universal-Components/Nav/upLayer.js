import Image from "next/image";
import React, { memo } from "react";
import Logo from "../../assets/Icons/Blogger-logo-01.webp";
import { NavUpLayer } from "./styles/navUpLayer";
import { withTheme } from "styled-components";

const UpLayerNav = () => {
  return (
    <NavUpLayer>
      <div className="navUpLayerLogo">
        <Image src={Logo} alt={"logo"} />
      </div>
      <div className="navUpLayerLogoAuth">
        <button className="navUpLayerLogoAuthSignIn">Sign In</button>
        <button className="navUpLayerLogoAuthGetStarted">Get Started</button>
      </div>
    </NavUpLayer>
  );
};

export default memo(UpLayerNav);

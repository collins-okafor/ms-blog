import Image from "next/image";
import React, { memo } from "react";
import Logo from "../../assets/Icons/Blogger-logo-01.webp";

const UpLayerNav = () => {
  return (
    <div>
      <div>
        <Image src={Logo} alt={"logo"} />
      </div>
      <div>
        <button>Sign In</button>
        <button></button>
      </div>
    </div>
  );
};

export default memo(UpLayerNav);

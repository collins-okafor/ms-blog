import React, { memo, useEffect, useState } from "react";
import LowerLayer from "./LowerLayer";
import { NavDiv } from "./styles/navStyles";
import UpLayerNav from "./upLayer";

const Nav = () => {
  const [fix, setFix] = useState(false);

  useEffect(() => {
    const HandleFix = () => {
      if (window.scrollY >= 5) {
        setFix(true);
      } else {
        setFix(false);
      }
    };

    window.addEventListener("scroll", HandleFix);

    return () => window.removeEventListener("scroll", HandleFix);
  }, [fix]);

  return (
    <NavDiv fix={fix}>
      <div className="UpperSection">
        <UpLayerNav />
      </div>

      <div className="LowerSection">
        <LowerLayer />
      </div>
    </NavDiv>
  );
};

export default memo(Nav);

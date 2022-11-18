import React, { useContext } from "react";
import { ImSun } from "react-icons/im";
import { BsFillMoonFill } from "react-icons/bs";
import { ThemeContext } from "../../pages/_app";
import { ModeDiv } from "./Styles/mode.style";

const SystemMode = () => {
  const { HandleThemeProvider } = useContext(ThemeContext);
  return (
    <ModeDiv>
      <div>
        <BsFillMoonFill />
      </div>
      <div>
        <ImSun />
      </div>
    </ModeDiv>
  );
};

export default SystemMode;

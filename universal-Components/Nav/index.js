import React, { memo } from "react";
import LowerLayer from "./LowerLayer";
import UpLayerNav from "./upLayer";

const Nav = () => {
  return (
    <div>
      <div>
        <UpLayerNav />
      </div>
      <div>
        <LowerLayer />
      </div>
    </div>
  );
};

export default memo(Nav);

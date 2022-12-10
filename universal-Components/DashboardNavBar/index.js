import React, { memo } from "react";
import { DashboardNavDiv } from "./styles/dashboardNav.style";
import { HiOutlineMenuAlt2 } from "react-icons/hi";
import { BiSearch } from "react-icons/bi";
import SystemMode from "../../components/SystemMode";
import { BsBell } from "react-icons/bs";
import Image from "next/image";
import Profile from "../../assets/Icons/avatar-profile-photo.png";
import { useDispatch, useSelector } from "react-redux";
import { REDUCE_SIDEBAR } from "../../store.js/type";
import { getLoginPageCounter } from "../../store.js/actions/authAction";
const DashboardNavBar = () => {
  const dispatch = useDispatch();
  const reduceSideBar = useSelector(
    (state) => state.DashboardConditionReducers.reduceSideBar
  );

  const HandleReduceSideBar = () => {
    dispatch({ type: REDUCE_SIDEBAR, payload: !reduceSideBar });
  };
  const handleSearch = () => {
    dispatch(getLoginPageCounter({ counter: 4 }));
  };
  return (
    <DashboardNavDiv reduceSideBar={reduceSideBar}>
      <div className="firstSection">
        <div className="firstSection__Switch" onClick={HandleReduceSideBar}>
          <HiOutlineMenuAlt2 className="firstSection__SwitchIcon" />
        </div>
        <div className="firstSection__Search">
          <BiSearch
            className="firstSection__SearchIcon"
            onClick={handleSearch}
          />
        </div>
      </div>
      <div className="secondSection">
        <div className="secondSection__SystemSwitch">
          <SystemMode />
        </div>
        <div className="secondSection__notification">
          <BsBell className="secondSection__notificationIcon" />
        </div>
        <div className="secondSection__Profile">
          <div className="secondSection__ProfileWrapper">
            <Image
              src={Profile}
              alt={"profile"}
              className="secondSection__ProfileWrapperImage"
            />
          </div>
        </div>
      </div>
    </DashboardNavDiv>
  );
};

export default memo(DashboardNavBar);

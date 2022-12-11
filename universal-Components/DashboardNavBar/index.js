import React, { memo, useRef } from "react";
import { DashboardNavDiv } from "./styles/dashboardNav.style";
import { HiOutlineMenuAlt2 } from "react-icons/hi";
import { BiSearch } from "react-icons/bi";
import SystemMode from "../../components/SystemMode";
import { BsBell } from "react-icons/bs";
import Image from "next/image";
import Profile from "../../assets/Icons/avatar-profile-photo.png";
import { useDispatch, useSelector } from "react-redux";
import { DASHBOARD_NAV_DROPDOWN, REDUCE_SIDEBAR } from "../../store/type";
import DashboarNavDropDown from "./dashboarNavDropDown";
import useOnClickOutside from "../../hooks/useOnClickOutside";

const DashboardNavBar = () => {
  const dispatch = useDispatch();
  const ref = useRef();
  const reduceSideBar = useSelector(
    (state) => state.DashboardConditionReducers.reduceSideBar
  );

  const dashbaordNavDropdown = useSelector(
    (state) => state.DashboardConditionReducers.dashbaordNavDropdown
  );

  const HandleReduceSideBar = () => {
    dispatch({ type: REDUCE_SIDEBAR, payload: !reduceSideBar });
  };

  useOnClickOutside(ref, () =>
    dispatch({
      type: DASHBOARD_NAV_DROPDOWN,
      payload: false,
    })
  );

  return (
    <DashboardNavDiv reduceSideBar={reduceSideBar}>
      <div className="firstSection">
        <div className="firstSection__Switch" onClick={HandleReduceSideBar}>
          <HiOutlineMenuAlt2 className="firstSection__SwitchIcon" />
        </div>
        <div className="firstSection__Search">
          <BiSearch className="firstSection__SearchIcon" />
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
          <div
            className="secondSection__ProfileWrapper"
            onClick={() => {
              dispatch({
                type: DASHBOARD_NAV_DROPDOWN,
                payload: !dashbaordNavDropdown,
              });
            }}
          >
            <Image
              src={Profile}
              alt={"profile"}
              className="secondSection__ProfileWrapperImage"
            />
          </div>
          <DashboarNavDropDown ref={ref} />
        </div>
      </div>
    </DashboardNavDiv>
  );
};

export default memo(DashboardNavBar);

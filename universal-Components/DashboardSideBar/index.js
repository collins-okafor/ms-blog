import Image from "next/image";
import { useRouter } from "next/router";
import React, { memo } from "react";
import { BsBell } from "react-icons/bs";
import { FaClipboardList, FaStackExchange } from "react-icons/fa";
import { FiEdit, FiHome } from "react-icons/fi";
import { DashbardSideBarDiv } from "./styles/dashbaordSidebar.style";
import Logo from "../../assets/Icons/Blogger-logo-01.webp";
import Profile from "../../assets/Icons/avatar-profile-photo.png";
import { useDispatch, useSelector } from "react-redux";
import { MdOutlineClose } from "react-icons/md";
import { REDUCE_SIDEBAR } from "../../store/type";
import useWindowDimensions from "../../hooks/useWindowDimension";
import Skeleton from "@mui/material/Skeleton";

const DashboardSidebar = () => {
  const width = useWindowDimensions();

  const router = useRouter();
  const dispatch = useDispatch();
  const reduceSideBar = useSelector(
    (state) => state.DashboardConditionReducers.reduceSideBar
  );

  const myUserDetails = useSelector(
    (state) => state.DashboardReducers.userStore
  );

  const RouteToPage = (link) => {
    router.push(`${link}`);
  };

  const ReturnSideBar = () => {
    dispatch({ type: REDUCE_SIDEBAR, payload: true });
  };

  return (
    <DashbardSideBarDiv reduceSideBar={reduceSideBar}>
      <div className="firstSection">
        <Image src={Logo} className="firstSection__image" alt="logo" />
      </div>
      <div className="firstSection__upperSectionState" onClick={ReturnSideBar}>
        <MdOutlineClose className="sidebar__UpperLayerCancelIcon" />
      </div>

      <div className="secondSection">
        {sideBarLink?.map((item, key) => (
          <div
            key={key}
            className={`secondSection_dashboard ${
              router.asPath === item.link && "selected"
            }`}
            onClick={() => {
              RouteToPage(item.link);
              if (typeof window !== "undefined") {
                if (width.width <= 1024) {
                  dispatch({ type: REDUCE_SIDEBAR, payload: false });
                }
              }
            }}
          >
            <div className="secondSection_dashboardIconBody">
              <item.logo className="secondSection_dashboardIcon" />
            </div>
            <p>{item.title}</p>
          </div>
        ))}
      </div>
      <div
        className="thirdSection"
        onClick={() => router.push("/dashboard/profile")}
      >
        <div className="thirdSection__ImageDetails">
          <div className="thirdSection__ImageDetailsWrapper">
            {Object.keys(myUserDetails).length === 0 ||
            !myUserDetails ||
            myUserDetails === null ||
            myUserDetails === undefined ? (
              <div>
                <Skeleton
                  animation="wave"
                  variant="circular"
                  width={40}
                  height={40}
                />
              </div>
            ) : (
              <Image
                src={
                  myUserDetails?.profile_pic &&
                  (myUserDetails.profile_pic.startsWith("http") ||
                    myUserDetails.profile_pic.startsWith("/"))
                    ? `${myUserDetails?.profile_pic}`
                    : Profile
                }
                width={50}
                height={50}
                alt={"profile"}
                className="thirdSection__ImageDetailsImage"
              />
            )}
          </div>
        </div>
        {Object.keys(myUserDetails).length === 0 || !myUserDetails ? (
          <div>
            <Skeleton animation="wave" height={50} width={180} />
          </div>
        ) : (
          <div className="thirdSection__infoDetials">
            <p className="thirdSection__infoDetialsUsername">
              {myUserDetails?.username}
            </p>
            <p className="thirdSection__infoDetialsEmail">
              {myUserDetails?.email}
            </p>
          </div>
        )}
      </div>
    </DashbardSideBarDiv>
  );
};

const sideBarLink = [
  { logo: FiHome, title: "Dashboard", link: "/dashboard" },
  { logo: BsBell, title: "Notifications", link: "/dashboard/notifications" },
  { logo: FaStackExchange, title: "Following", link: "/dashboard/followings" },
  { logo: FaClipboardList, title: "Stories", link: "/dashboard/stories" },
  { logo: FiEdit, title: "Write", link: "/dashboard/write" },
];

export default memo(DashboardSidebar);

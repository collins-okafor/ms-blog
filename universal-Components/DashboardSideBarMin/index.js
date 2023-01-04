import React, { memo } from "react";
import { DashboardMinDiv } from "./styles/dashboardSidebar.style";
import { BsBell } from "react-icons/bs";
import { FaClipboardList, FaStackExchange } from "react-icons/fa";
import { FiEdit, FiHome } from "react-icons/fi";
import Profile from "../../assets/Icons/avatar-profile-photo.png";
import Image from "next/image";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import Skeleton from "@mui/material/Skeleton";

const DashboardSideBarMin = () => {
  const router = useRouter();
  const reduceSideBar = useSelector(
    (state) => state.DashboardConditionReducers.reduceSideBar
  );

  const myUserDetails = useSelector(
    (state) => state.DashboardReducers.userStore
  );

  const RouteToPage = (link) => {
    router.push(`${link}`);
  };

  return (
    <DashboardMinDiv reduceSideBar={reduceSideBar}>
      <div className="firstSection">
        {/* <Image src={Logo} className="firstSection__image" alt="logo" /> */}
      </div>
      <div className="secondSection">
        {sideBarLink?.map((item, key) => (
          <div
            key={key}
            className={`secondSection_dashboard ${
              router.asPath === item.link && "selected"
            }`}
            onClick={() => RouteToPage(item.link)}
          >
            <div className="secondSection_dashboardIconBody">
              <item.logo className="secondSection_dashboardIcon" />
            </div>
          </div>
        ))}
      </div>
      <div className="thirdSection">
        <div className="thirdSection__ImageDetails">
          <div
            className="thirdSection__ImageDetailsWrapper"
            onClick={() => router.push("/dashboard/profile")}
          >
            {Object.keys(myUserDetails).length === 0 || !myUserDetails ? (
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
                width={200}
                height={200}
                alt={"profile"}
                className="thirdSection__ImageDetailsImage"
              />
            )}
          </div>
        </div>
      </div>
    </DashboardMinDiv>
  );
};

const sideBarLink = [
  { logo: FiHome, title: "Dashboard", link: "/dashboard" },
  { logo: BsBell, title: "Notifications", link: "/dashboard/notifications" },
  { logo: FaStackExchange, title: "Following", link: "/dashboard/followings" },
  { logo: FaClipboardList, title: "Stroies", link: "/dashboard/stories" },
  { logo: FiEdit, title: "Write", link: "/dashboard/write" },
];

export default memo(DashboardSideBarMin);

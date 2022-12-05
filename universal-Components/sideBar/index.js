import Image from "next/image";
import Link from "next/link";
import React, { memo } from "react";
import { MdOutlineClose } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import Logo from "../../assets/Icons/Blogger-logo-01.webp";
import { getLoginPageCounter } from "../../store.js/actions/authAction";
import { getShowHideSidebar } from "../../store.js/actions/landingPageAction";
import { SideBarDiv } from "./styles/sidebar.style";

const SideBar = () => {
  const dispatch = useDispatch();
  const showHideSidebar = useSelector(
    (state) => state.landingPageReducer.showHideSidebar
  );

  const showSignUp = () => {
    dispatch(getLoginPageCounter({ counter: 0 }));
  };
  const showSignIn = () => {
    dispatch(getLoginPageCounter({ counter: 2 }));
  };

  const handleSidebar = () => {
    dispatch(getShowHideSidebar(false));
  };

  return (
    <SideBarDiv showHideSidebar={showHideSidebar}>
      <div className="sidebar__UpperLayer">
        <div
          className="sidebar__UpperLayerCancelIconBody"
          onClick={handleSidebar}
        >
          <MdOutlineClose className="sidebar__UpperLayerCancelIcon" />
        </div>
        <div className="sidebar__UpperLayerLogo">
          <Image src={Logo} alt="" />
        </div>
        <div className="navUpLayerLogoAuthSystem">
          <button className="navUpLayerLogoAuthSignIn" onClick={showSignIn}>
            Sign In
          </button>
          <button className="navUpLayerLogoAuthGetStarted" onClick={showSignUp}>
            Get Started
          </button>
        </div>
      </div>
      <div className="LowerNavLinks">
        {LinksDetails?.map((item, key) => (
          <Link key={key} href={`${item.link}`}>
            <div className="LowerNavLinksData">{item.text}</div>
          </Link>
        ))}
      </div>
    </SideBarDiv>
  );
};

const LinksDetails = [
  { text: "Directory", link: "" },
  { text: "Blog", link: "" },
  { text: "Add Your Biz", link: "" },
  { text: "Subscribe", link: "" },
  { text: "Conversation", link: "" },
  { text: "Popular", link: "" },
  { text: "Contact Us", link: "" },
];

export default memo(SideBar);

import Link from "next/link";
import React, { memo, useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";
import SystemMode from "../../components/SystemMode";
import { ScrollingNavDiv } from "./styles/scrollingNav.style";
import Logo from "../../assets/Icons/Blogger-logo-01.webp";
import Image from "next/image";

const ScrollingNav = () => {
  const [fix, setFix] = useState(false);

  useEffect(() => {
    const HandleFix = () => {
      if (window.scrollY > 30) {
        setFix(true);
      } else {
        setFix(false);
      }
    };

    window.addEventListener("scroll", HandleFix);

    return () => window.removeEventListener("scroll", HandleFix);
  }, [fix]);

  return (
    <ScrollingNavDiv fix={fix}>
      <div>
        <Image src={Logo} alt={"logo"} />
      </div>
      <div className="LowerNavLinks">
        {LinksDetails?.map((item, key) => (
          <Link key={key} href={`${item.link}`}>
            <div className="LowerNavLinksData">{item.text}</div>
          </Link>
        ))}
      </div>
      <div className="LowerNavDetails">
        <div className="LowerNavDetailsModeSection">
          <SystemMode />
        </div>
        <div className="LowerNavDetailsSearchIconBody">
          <FaSearch className="LowerNavDetailsSearchIcon" />
        </div>
      </div>
    </ScrollingNavDiv>
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

export default memo(ScrollingNav);

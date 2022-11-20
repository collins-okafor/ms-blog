import Link from "next/link";
import React, { memo } from "react";
import SystemMode from "../../components/SystemMode";
import { LowerLayers } from "./styles/lowerLayers";
import { FaSearch } from "react-icons/fa";

const LowerLayer = () => {
  return (
    <LowerLayers>
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
    </LowerLayers>
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

export default memo(LowerLayer);

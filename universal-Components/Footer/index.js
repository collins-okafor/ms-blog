import React, { memo } from "react";
import { FooterDiv } from "./style/footer.styles";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaPinterestP,
} from "react-icons/fa";
import Link from "next/link";

const Footer = () => {
  return (
    <FooterDiv>
      <div>
        {socialMediaHandles?.map((item, key) => (
          <Link key={key} href={item.link}>
            <div>
              <item.linkIcon />
            </div>
          </Link>
        ))}
      </div>
      <div></div>
      <div></div>
    </FooterDiv>
  );
};

const socialMediaHandles = [
  { link: "", linkIcon: FaFacebook },
  { link: "", linkIcon: FaFacebook },
  { link: "", linkIcon: FaFacebook },
  { link: "", linkIcon: FaFacebook },
];

export default memo(Footer);

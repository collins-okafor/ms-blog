import React, { useState } from "react";
import { useSelector } from "react-redux";
import photoTwo from "../../assets/Images/indesignSeven.jpg";
import SearchComp from "../../universal-Components/search";
import { useRouter } from "next/router";

const DashboardSearch = () => {
  const router = useRouter();
  const getAllarticle = useSelector(
    (state) => state?.landingPageReducer?.getAllarticle
  );

  let auth =
    typeof window !== "undefined" && window.localStorage.getItem("token");

  const HandleClick = (item) => {
    // router.push({
    //   pathname: "/[articleDetails]",
    //   query: { articleDetails: item._id },
    // });
    if (auth) {
      router.push(`/dashboard/${item._id}`);
    } else {
      router.push(`/${item._id}`);
    }
    console.log("router pushing");
  };
  return (
    <SearchComp
      searchArry={getAllarticle?.allArticle}
      handleOpenSearch={HandleClick}
    />
  );
};

const posts = [
  {
    image: photoTwo.src,
    title: "bitcoin climbs as elon musk says tesla likely to accept it again",
    link: "/",
    date: "Mar 16, 2021",
  },
  {
    image: photoTwo.src,
    title: "How to become a better Programmer",
    link: "/",
    date: "Mar 16, 2021",
  },
  {
    image: photoTwo.src,
    title: "Step by step guide in Making good interior design",
    link: "/",
    date: "Mar 16, 2021",
  },
];
export default DashboardSearch;

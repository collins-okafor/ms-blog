import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import photoTwo from "../../assets/Images/indesignSeven.jpg";
import SearchComp from "../../universal-Components/search";
import { useRouter } from "next/router";
import { getLoginPageCounter } from "../../store/actions/authAction";

const HomeSearch = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const getAllarticle = useSelector(
    (state) => state?.landingPageReducer?.getAllarticle
  );

  const HandleClick = (item) => {
    router.push(`/dashboard/${item._id}`);
    dispatch(getLoginPageCounter({}));
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
export default HomeSearch;

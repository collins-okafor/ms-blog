import React from "react";
import SinglePost from "../singlePost";
import photoOne from "../../../assets/Images/about-us.jpg";
import photoTwo from "../../../assets/Images/indesignSeven.jpg";
import photoThree from "../../../assets/Images/programmer-working-on-laptop-computer-technology.jpg";
import photoFour from "../../../assets/Images/indesignFive.jpg";
import photoFive from "../../../assets/Images/paris.jpg";
import photoSix from "../../../assets/Images/about-us.jpg";
import { AllPostStyle } from "./style";

const PostsDisplay = () => {
  const posts = [
    {
      profilePics: photoOne,
      photo: photoOne,
      title: "How to build a blog",
      author: "Emeka",
      date: "Jan 20",
      content:
        "Sungkyunkwan University (SKKU) is a world-class institution of higher education that has existed for more than six centuries. Since its founding as a royal Confucian academy in 1398 at the dawn of the Joseon Dynasty (1392-1910), SKKU has demonstrated strong academic leadership. Cont…",
    },
    {
      profilePics: photoOne,
      photo: photoTwo,
      title: "My First Electricity Connection",
      author: "Joshua Ejike",
      date: "August 19",
      content:
        "Sungkyunkwan University (SKKU) is a world-class institution of higher education that has existed for more than six centuries. Since its founding as a royal Confucian academy in 1398 at the dawn of the Joseon Dynasty (1392-1910), SKKU has demonstrated strong academic leadership. Cont…",
    },
    {
      profilePics: photoOne,
      photo: photoThree,
      title: "How to become a better Programmer",
      author: "Emeka",
      date: "1 day ago",
      content:
        "Sungkyunkwan University (SKKU) is a world-class institution of higher education that has existed for more than six centuries. Since its founding as a royal Confucian academy in 1398 at the dawn of the Joseon Dynasty (1392-1910), SKKU has demonstrated strong academic leadership. Cont…",
    },
    {
      profilePics: photoOne,
      photo: photoFour,
      title: "Step by step guide in Making good interior design",
      author: "Emeka",
      date: "May 24",
      content:
        "Sungkyunkwan University (SKKU) is a world-class institution of higher education that has existed for more than six centuries. Since its founding as a royal Confucian academy in 1398 at the dawn of the Joseon Dynasty (1392-1910), SKKU has demonstrated strong academic leadership. Cont…",
    },
    {
      profilePics: photoOne,
      photo: photoFive,
      title: "A visit to paris",
      author: "Emeka",
      date: "June 23",
      content:
        "Sungkyunkwan University (SKKU) is a world-class institution of higher education that has existed for more than six centuries. Since its founding as a royal Confucian academy in 1398 at the dawn of the Joseon Dynasty (1392-1910), SKKU has demonstrated strong academic leadership. Cont…",
    },
  ];
  return (
    <AllPostStyle>
      {posts.map((post) => (
        <>
          <SinglePost
            profilePhoto={post.profilePics}
            photo={post.photo}
            title={post.title}
            author={post.author}
            date={post.date}
            content={post.content}
          />
        </>
      ))}
    </AllPostStyle>
  );
};

export default PostsDisplay;

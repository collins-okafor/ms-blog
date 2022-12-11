import { NextResponse } from "next/server";
// import { NextResponse } from "next/dist/server/web/spec-extension/response";
import React from "react";
// import { NextResponse, NextRequest } from "next/server";
// import customUseRouter from "./universal-Components/customUseRouter";

const middleware = (req) => {
  // NextResponse.setHeader(200, { "content-Type": "text/html" });
  const { url } = req;
  const tokens = req.cookies.get("token");
  const makeUrl = req.nextUrl.clone();

  // const requestHeaders = new Headers(req.Headers);
  // requestHeaders.set({ "content-type": "text/html" });

  // console.log(makeUrl, "our stated url");

  // const token = typeof window !== "undefined" && localStorage.getItem("token");

  // console.log(tokens.value, "ejike", "joshua ejike");

  // if (tokens.value) {
  //   console.log(tokens, url, "token");
  //   return NextResponse.redirect("http://localhost:3000/dashboard/");
  // } else {
  //   return NextResponse.redirect("http://localhost:3000/");
  // }

  // console.log(NextResponse, req.nextUrl, cookies, "stated url");

  // // const jwt = cookies.OursiteJWT;
  // const jwt = typeof window !== "undefined" && localStorage.getItem("token");

  // const url = req.url;

  // if (
  //   !url.includes("/dashboard") &&
  //   !url.includes("/_next/static/development/_ssgManifest.js") &&
  //   !url.includes("/_next/static/development/_buildManifest.js") &&
  //   !url.includes("/_next/static/chunks/pages/_app.js") &&
  //   !url.includes("/_ /static/chunks/react-refresh.js") &&
  //   !url.includes("/_next/static/chunks/main.js") &&
  //   !url.includes("/_next/static/chunks/webpack.js") &&
  //   !url.includes("/_next/static/chunks/pages/login.js") &&
  //   !url.includes("/manifest.json")
  // ) {
  //   console.log(url, "not login");
  //   if (tokens.value) {
  //     try {
  //       // verify(jwt, secret);
  //       // return NextResponse.redirect(
  //       //   new URL(`${makeUrl.origin}/dashboard`, req.url)
  //       // );

  //       return NextResponse.redirect(`${makeUrl.origin}/dashboard`);
  //     } catch (err) {
  //       return NextResponse.next();
  //     }
  //   }
  // }

  // if (
  //   url.includes("/dashboard") &&
  //   !url.includes("/_next/static/development/_ssgManifest.js") &&
  //   !url.includes("/_next/static/development/_buildManifest.js") &&
  //   !url.includes("/_next/static/chunks/pages/_app.js") &&
  //   !url.includes("/_next/static/chunks/react-refresh.js") &&
  //   !url.includes("/_next/static/chunks/main.js") &&
  //   !url.includes("/_next/static/chunks/webpack.js") &&
  //   !url.includes("/_next/static/chunks/pages/login.js") &&
  //   !url.includes("/manifest.json")
  // ) {
  //   console.log(url, "login joshua");
  //   if (
  //     tokens.value === undefined ||
  //     tokens.value === null ||
  //     tokens.value === ""
  //   ) {
  //     //   !url.includes("/_next/static/development/_ssgManifest.js") &&
  //     // !url.includes("/_next/static/development/_buildManifest.js") &&
  //     // !url.includes("/_next/static/chunks/pages/_app.js") &&
  //     // !url.includes("/_next/static/chunks/react-refresh.js") &&
  //     // !url.includes("/_next/static/chunks/main.js") &&
  //     // !url.includes("/_next/static/chunks/webpack.js") &&
  //     // !url.includes("/_next/static/chunks/pages/login.js") &&
  //     // !url.includes("/manifest.json")

  //     // if()

  //     return NextResponse.redirect(`${makeUrl.origin}`);
  //   }

  //   try {
  //     // verify(jwt, secret);

  //     return NextResponse.next();
  //   } catch (err) {
  //     return NextResponse.redirect(`${makeUrl.origin}`);
  //   }
  // }
  return NextResponse.next();
};

export default middleware;

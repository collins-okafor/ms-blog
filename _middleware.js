import React from "react";
import { NextResponse } from "next/server";
import { verify } from "jsonwebtoken";

const middleware = (req) => {
  const { cookies } = req;

  const jwt = cookies.OursiteJWT;

  const url = req.url;

  if (!url.includes("/dashboard")) {
    if (jwt) {
      try {
        verify(jwt, secret);

        return NextResponse.redirect("/dashboard");
      } catch (err) {
        return NextResponse.next();
      }
    }
  }

  if (url.includes("/dashboard")) {
    if (jwt === undefined) {
      return NextResponse.redirect("/");
    }

    try {
      verify(jwt, secret);

      return NextResponse.next();
    } catch (err) {
      return NextResponse.redirect("/");
    }
  }
  return NextResponse.next();
};

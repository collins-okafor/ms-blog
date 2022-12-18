import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

export function Redirect({ to }) {
  const router = useRouter();

  useEffect(() => {
    router?.replace(to).then();
  }, [router, to]);
  return null;
}

const ProtectedRoute = ({ children }) => {
  const router = useRouter();
  const [user, setUser] = useState(false);

  let isLoggedin =
    typeof window !== "undefined" && window.localStorage.getItem("isLoggedIn");

  // let auth =
  //   typeof window !== "undefined" && window.localStorage.getItem("token");

  useEffect(() => {
    let auth =
      typeof window !== "undefined" && window.localStorage.getItem("token");

    if (auth) {
      setUser(true);
    } else {
      setUser(false);
    }

    return () => {
      console.log("finished");
    };
  }, []);

  return (
    <>
      {!user ? (
        <>
          <div>Loading...</div>
        </>
      ) : !isLoggedin ? (
        <Redirect to={"/"} />
      ) : isLoggedin && !router.pathname.includes("dashboard") ? (
        <Redirect to={"/dashboard"} />
      ) : (
        children
      )}
    </>
  );
};

export default ProtectedRoute;
// && router.pathname.includes("dashboard")

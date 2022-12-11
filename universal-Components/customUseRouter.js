import React from "react";
import { useRouter } from "next/router";

const customUseRouter = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const router = useRouter();

  return router;
};

export default customUseRouter;

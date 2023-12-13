"use client";

import React from "react";
import dynamic from "next/dynamic";
import { useSearchParams } from "next/navigation";
import Spinner from "@/components/shared/Spinner";

const ProtocolConfig = dynamic(() => import("@/app/auth/auth"), {
  loading: () => <Spinner />,
});

const Auth = () => {
  const searchParams = useSearchParams();
  const redirectUrl = searchParams.get("redirectUrl");

  return <ProtocolConfig redirectUrl={redirectUrl!} />;
};

export default Auth;

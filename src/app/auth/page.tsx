"use client";

import { Button } from "@/components/shared/Button";
// @ts-ignore
import { useSearchParams } from "next/navigation";
import React from "react";

const Auth = () => {
  const searchParams = useSearchParams();
  const redirectUrl = searchParams.get("redirectUrl");
  const configureDid = () => {
    //configure users did here
    //web5.connect()
    console.log("Configuration method called.");
  };
  return (
    <div className="flex w-1/2 p-5 my-8 mx-auto items-center justify-between flex-col gap-10 border border-border rounded-md">
      <h1 className="font-bold text-lg text-center">
        Take 1 minute to configure you Identity and storage. Skip if you have
        already done that before.
      </h1>
      <div className="flex w-[80%] items-center justify-between gap-3">
        <Button
          customDesign="bg-accent text-white hover:bg-accent-light"
          link={redirectUrl == null ? "/" : redirectUrl!}
          label="Proceed"
        />
        <button
          type="button"
          className="bg-accent text-white hover:bg-accent-light flex items-center justify-center rounded-[3.875rem] gap-[0.75rem] font-[500] text-base w-[13.625rem] h-[3.25rem] px-7 py-3 text-[0.9rem] transition-all"
          onClick={configureDid}
        >
          Configure
        </button>
      </div>
    </div>
  );
};

export default Auth;

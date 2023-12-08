"use client";

import { Button } from "@/components/shared/Button";
import { useSearchParams } from "next/navigation";
import React, { useState } from "react";
import Image from "next/image";
const ConfigureProtocol: React.FC<{ link: string }> = ({ link }) => {
  const searchParams = useSearchParams();
  const redirectUrl = searchParams.get("redirectUrl");
  const [modal, setModal] = useState(true);
  const configureDid = () => {
    //configure users did here
    //web5.connect()
    console.log("Configuration method called.");
  };
  return (
    <div
      className={`${
        modal ? "flex" : "hidden"
      } w-full fixed min-h-[100vh] z-[99999] bg-neutral-800 items-center justify-center inset-0`}
    >
      <div className="w-[50vw] h-[90vh] p-12 m-auto flex flex-col items-center gap-5 justify bg-white rounded-md relative">
        <h2 className="text-black text-lg font-normal">
          Take 1 minute to configure your identity, skip if you have done that
          already
        </h2>
        <Image
          className="absolute right-[3%] top-8"
          onClick={() => setModal(!modal)}
          src="/svg/cut.svg"
          alt="Close Menu"
          width={20}
          height={20}
        />

        <div className="flex flex-col w-full">
          <div
            onClick={() => {}}
            className="w-full py-4 rounded bg-transparent inline-flex items-center bg-opacity-10 opacity-70 justify-center text-center"
          >
            <h3 className="text-black text-sm font-medium">Protocol Config</h3>
          </div>
          <div
            onClick={() => {}}
            className="w-full py-12 inline-flex items-center bg-opacity-10 opacity-70 justify-center text-center"
          >
            <h3 className="text-black text-sm font-medium">Protocol Query</h3>
          </div>
          <div
            onClick={() => {}}
            className="w-full py-12 inline-flex items-center bg-opacity-10 gap-2.5 opacity-70 justify-center text-center"
          >
            <h3 className="text-black text-sm font-medium">See DID</h3>
          </div>
        </div>
        <Button
          label="Proceed"
          link={link}
          className="w-full bg-accent py-4 rounded-md text-white text-center"
        />

        <div className="flex flex-row items-center justify-between text-slate-900 text-xs font-medium">
          Copy DID instead
          <span>
            <Image
              src="/svg/tabler_copy.svg"
              alt=""
              width={15.47}
              height={15.47}
            />
          </span>
        </div>
      </div>
    </div>
  );
};

export default ConfigureProtocol;

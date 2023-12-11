"use client";

import { Button } from "@/components/shared/Button";
import { useSearchParams, useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { CopyText } from "@/libs/services/clipboard";
import Alert from "@/components/shared/alert/Alert";
import { AlertDto } from "@/libs/types/Dtos/alert.dto";

const ConfigureProtocol = () => {
  //logics
  let did!: string | undefined;
  useEffect(() => {
    did = document.getElementById("userdid")?.innerText;
  }, []);
  const searchParams = useSearchParams();
  const redirectUrl = searchParams.get("redirectUrl");
  const router = useRouter();
  const [copyMessage, setCopyMessage] = useState<AlertDto>({
    isSuccessful: false,
    message: null,
  });

  const handleCopy = async () => {
    let response = await CopyText(did);
    setCopyMessage(response);
    setTimeout(() => {
      setCopyMessage({ isSuccessful: false, message: null });
    }, 2500);
  };

  return (
    <>
      {copyMessage.isSuccessful ? (
        <Alert successMessage={copyMessage.message} />
      ) : (
        <Alert errorMessage={copyMessage.message} />
      )}
      <div
        className="w-full fixed min-h-[100vh] z-[999] bg-neutral-800 items-center justify-center inset-0"
        onClick={() => router.push("/#new-arrivals")}
      ></div>
      <div className="z-[99999] w-[100vw] h-screen md:h-[80vh] md:w-[70vw] lg:w-[50vw] p-12 my-auto mx-auto flex flex-col items-center gap-5 justify bg-white rounded-md relative">
        <h2 className="text-black text-lg font-normal">
          Take 1 minute to configure your identity, skip if you have done that
          already.
        </h2>
        <Link href="/#new-arrivals">
          <Image
            className="absolute right-[3%] top-8"
            src="/svg/cut.svg"
            alt="Close Menu"
            width={20}
            height={20}
          />
        </Link>
        <div className="flex flex-col w-full">
          <div
            onClick={() => {}}
            className="w-full py-4 mb-4 rounded inline-flex items-center bg-gray-500 bg-opacity-10 opacity-70 justify-center text-center cursor-pointer"
          >
            <h3 className="text-black text-sm font-medium">Protocol Config</h3>
          </div>
          <div
            onClick={() => {}}
            className="w-full py-4 mb-4 inline-flex items-center bg-gray-500  bg-opacity-10 opacity-70 justify-center text-center  cursor-pointer"
          >
            <h3 className="text-black text-sm font-medium">Protocol Query</h3>
          </div>
          <div
            onClick={() => {}}
            className="w-full py-4 inline-flex items-center bg-gray-500  bg-opacity-10 gap-2.5 opacity-70 justify-center text-center  cursor-pointer"
          >
            <h3 className="text-black text-sm font-medium">See DID</h3>
          </div>
        </div>
        <Button
          label="Proceed"
          link={redirectUrl!}
          className="w-full bg-accent py-4 rounded-md text-white text-center"
        />

        <div
          onClick={handleCopy}
          className="flex flex-row items-center justify-between text-slate-900 text-xs font-medium cursor-pointer"
        >
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
    </>
  );
};

export default ConfigureProtocol;

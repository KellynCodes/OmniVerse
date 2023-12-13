"use client";
import { Button } from "@/components/shared/Button";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { CopyText } from "@/libs/services/clipboard";
import Alert from "@/components/shared/alert/Alert";
import { AlertDto } from "@/libs/types/Dtos/alert.dto";
import ProtocolDefinition from "./ProtocolDefinition";

const ConfigureProtocol: React.FC<{ redirectUrl: string }> = ({
  redirectUrl,
}) => {
  const router = useRouter();
  const [copyMessage, setCopyMessage] = useState<AlertDto>({
    isSuccessful: false,
    message: null,
  });
  const [message, setMessage] = useState<AlertDto>({
    isSuccessful: false,
    message: null,
  });

  const [web5, setWeb5] = useState<any>(null);
  const [myDid, setMyDid] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [protocolStatus, setProtocolStatus] = useState<{
    code: number | null;
    detail: string | null;
  } | null>({ code: 0, detail: null });
  const [queryProtocolStatus, setQueryProtocolStatus] = useState<any>(null);
  const [isDidVisible, setIsDidVisible] = useState<boolean>(false);

  useEffect(() => {
    setIsLoading(true);
    const initWeb5 = async () => {
      const { Web5 } = await import("@web5/api");
      try {
        const { web5, did } = await Web5.connect();
        setWeb5(web5);
        setMyDid(did);
        setIsLoading(false);
      } catch (error) {
        setIsLoading(false);
        console.error("Failed to connect using Web5: ", error);
      }
    };

    initWeb5();
  }, []);

  const handleCopy = async () => {
    if (myDid) {
      let response = await CopyText(myDid);
      setCopyMessage(response);
      setTimeout(() => {
        setCopyMessage({ isSuccessful: false, message: null });
      }, 2500);
    }
  };

  const handleConfigProtocol = async () => {
    setIsLoading(true);
    try {
      const { protocol, status } = await web5.dwn.protocols.configure({
        message: {
          definition: ProtocolDefinition,
        },
      });
      setProtocolStatus(() => {
        return status;
      });
      await protocol.send(myDid);
    } catch (error) {
      setMessage({ isSuccessful: false, message: `${error}` });
    } finally {
      setIsLoading(false);
      setTimeout(() => {
        setMessage({ isSuccessful: false, message: null });
        setProtocolStatus(null);
      }),
        5000;
    }
  };

  const handleQueryProtocol = async () => {
    setIsLoading(true);
    try {
      const { protocols } = await web5.dwn.protocols.query({
        message: {
          filter: {
            protocol: "https://OmniVerse",
          },
        },
      });
      console.log(protocols);

      if (protocols[0]) {
        setQueryProtocolStatus(
          "Installed protocol: " +
            JSON.stringify(protocols[0].definition.protocol)
        );
      } else {
        setQueryProtocolStatus("No protocol found.");
      }
      setIsLoading(false);
    } catch (error) {
      console.error("Error querying protocol:", error);
    } finally {
      setIsLoading(false);
      setTimeout(
        () => setMessage({ isSuccessful: false, message: null }),
        5000
      );
    }
  };

  return (
    <>
      {copyMessage.isSuccessful &&
      copyMessage.message != "" &&
      copyMessage.message != null ? (
        <Alert successMessage={copyMessage.message} />
      ) : (
        <Alert errorMessage={copyMessage.message} />
      )}
      <div
        className="w-full fixed min-h-[100vh]  z-[999] bg-neutral-800 items-center justify-center inset-0"
        onClick={() => router.push("/#new-arrivals")}
      ></div>
      <div className="z-[99999] w-[100vw] overflow-y-scroll fixed inset-0 h-screen md:h-[80vh] md:w-[70vw] lg:w-[50vw] p-12 my-auto mx-auto flex flex-col items-center gap-5 justify bg-white rounded-md">
        <h2 className="text-black text-lg font-normal">
          Take 1 minute to configure your identity, skip if you have done that
          already.
        </h2>

        {isLoading ? (
          <div className="flex items-center justify-center">
            <div className="animate-spin rounded-full h-32 w-32 border-t-4 border-black"></div>
          </div>
        ) : null}

        {message.message != null ||
        (message.message != "" && message.isSuccessful) ? (
          <Alert successMessage={message.message} />
        ) : message.message != null ||
          (message.message != "" && message.isSuccessful == false) ? (
          <Alert errorMessage={message.message} />
        ) : null}
        <Link href="/#new-arrivals">
          <Image
            className="fixed right-[3%] top-8"
            src="/svg/cut.svg"
            alt="Close Menu"
            width={20}
            height={20}
          />
        </Link>
        {protocolStatus != null &&
        protocolStatus.code == 202 &&
        protocolStatus.detail == "Accepted" ? (
          <Alert successMessage="Configuration Successful Copy Your DID and CLick on proceed" />
        ) : protocolStatus &&
          protocolStatus.code == 202 &&
          protocolStatus.detail == "Accepted" ? (
          <Alert errorMessage="Sorry something unexpected happened while configuring your session. Please try again." />
        ) : null}

        {!isLoading ? (
          <div className="flex flex-col w-full">
            <div className="flex flex-col w-full">
              <div
                onClick={handleConfigProtocol}
                className="w-full py-4 mb-4 rounded inline-flex items-center bg-gray-500 bg-opacity-10 opacity-70 justify-center text-center cursor-pointer"
              >
                <h3 className="text-black text-sm font-medium">
                  Protocol Config
                </h3>
              </div>

              <div
                onClick={handleQueryProtocol}
                className="w-full py-4 mb-4 inline-flex items-center bg-gray-500  bg-opacity-10 opacity-70 justify-center text-center  cursor-pointer"
              >
                <h3 className="text-black text-sm font-medium">
                  Protocol Query
                </h3>
              </div>
              {queryProtocolStatus && (
                <Alert successMessage={queryProtocolStatus} />
              )}

              <div
                onClick={() => setIsDidVisible(!isDidVisible)}
                className="w-full py-4 inline-flex items-center bg-gray-500  bg-opacity-10 gap-2.5 opacity-70 justify-center text-center  cursor-pointer"
              >
                <h3 id="seeDidInfo" className="text-black text-sm font-medium">
                  See DID
                </h3>
              </div>
              {isDidVisible && (
                <div className="w-full h-[15rem] flex mt-4 p-4 bg-gray-200 rounded">
                  <div className="w-full overflow-x-hidden overflow-y-scroll scroll-p-1 flex flex-wrap">
                    {myDid &&
                      myDid
                        .split("")
                        .map((char, index) => <span key={index}>{char}</span>)}
                  </div>
                </div>
              )}
              <Button
                label="Proceed"
                link={redirectUrl!}
                className="w-full bg-accent py-4 rounded-md mt-5 text-white text-center"
              />

              <div
                onClick={handleCopy}
                className="flex w-fit mx-auto flex-row items-center justify-center mt-6 text-slate-900 text-xs font-medium cursor-pointer"
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
          </div>
        ) : null}
      </div>
    </>
  );
};

export default ConfigureProtocol;

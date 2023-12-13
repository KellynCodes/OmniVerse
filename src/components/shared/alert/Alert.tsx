import React from "react";
import "./alert.css";

const Alert: React.FC<{
  successMessage?: string | null;
  errorMessage?: string | null;
  info?: string | null;
}> = ({ successMessage, errorMessage, info }) => {
  return (
    <>
      <div
        className={`${
          successMessage != null ? "show" : ""
        } alert w-[30rem] bg-green-200 border-l-4 border-green-500 text-green-700 p-4`}
        role="alert"
      >
        <div className="flex items-center">
          <div className="mr-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-green-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path></path>
            </svg>
          </div>
          <div>
            <p className="font-bold">Success</p>
            <p>{successMessage}</p>
          </div>
        </div>
      </div>

      <div
        className={`${
          errorMessage != null ? "show" : ""
        } alert w-[30rem] bg-red-200 border-l-4 border-red-500 text-red-700 p-4`}
        role="alert"
      >
        <div className="flex items-center">
          <div className="mr-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-red-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </div>
          <div>
            <p className="font-bold">Error</p>
            <p>{errorMessage}</p>
          </div>
        </div>
      </div>

      <div
        className={`${
          info != null ? "show" : ""
        } alert w-[30rem] bg-blue-200 border-l-4 border-blue-500 text-blue-700 p-4`}
        role="alert"
      >
        <div className="flex items-center">
          <div className="mr-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-blue-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M5 13l4 4L19 7"></path>
            </svg>
          </div>
          <div>
            <p className="font-bold">Info</p>
            <p>{info}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Alert;

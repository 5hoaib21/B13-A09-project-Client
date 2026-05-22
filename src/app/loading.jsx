"use client";
import React from "react";

import { DotLoader } from "react-spinners";

const LoadingPage = () => {
  return (
    <div className="flex flex-col space-y-8 h-[85vh] items-center justify-center">
      <h2 className="text-3xl font-bold">StudyNook</h2>
      <DotLoader
        visible={true}
        height="80"
        width="80"
        color="#4fa94d"
        ariaLabel="triangle-loading"
        wrapperStyle={{}}
        wrapperClass=""
      />
    </div>
  );
};

export default LoadingPage;

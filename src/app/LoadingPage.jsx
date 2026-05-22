import React from "react";
import { Triangle } from "react-loader-spinner";

const LoadingPage = () => {
  return (
    <div className="flex h-[85vh] items-center justify-center">
      <Triangle
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

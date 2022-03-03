import React from "react";

function CardLoading() {
  return (
    <div className="animate-pulse mb-16">
      <h2 className="w-full h-2 bg-gray-300 mb-3"></h2>
      <div className="w-1/2 flex justify-start items-center mb-3">
        <span className="w-1/2 h-1 bg-gray-300 mr-1" />
        <span className="w-1/2 h-1 bg-gray-300 " />
      </div>
      <div className="w-full">
        <p className="w-full h-2 bg-gray-300 mb-2" />
        <p className="w-full h-2 bg-gray-300 mb-2" />
        <p className="w-full h-2 bg-gray-300 mb-2" />
      </div>
    </div>
  );
}

export default CardLoading;

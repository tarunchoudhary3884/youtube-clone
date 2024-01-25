import React from "react";

function Shimmer() {
  return (
    <div className="w-72 h-64 border-2 border-black shadow flex flex-col justify-center items-center gap-3 p-2 m-4">
      <div className="w-64 h-48 bg-zinc-600 animate-pulse"></div>
      <div className="flex flex-col gap-3">
        <div className="w-64 h-3 bg-zinc-600 animate-pulse"></div>
        <div className="w-24 h-3 bg-zinc-600 animate-pulse"></div>
      </div>
      <div className="w-64 h-3 bg-zinc-600 animate-pulse"></div>
    </div>
  );
}

export default Shimmer;

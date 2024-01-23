import React, { useEffect } from "react";
import { useSearchParams } from "react-router-dom";

import { useDispatch } from "react-redux";
import { closeMenu } from "../redux/appSlice";
function VideoPlayer() {
  const [searchParams] = useSearchParams();
  console.log(searchParams.get("v"));
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(closeMenu());
  }, []);
  return (
    <div className="w-full p-2">
      <iframe
        className="w-full lg:h-full aspect-video rounded-lg"
        src={"https://www.youtube.com/embed/" + searchParams.get("v")}
        frameBorder="0"
        allowFullScreen
      ></iframe>
    </div>
  );
}

export default VideoPlayer;

import React, { useState } from "react";
import useFormattedNumber from "../customHooks/useFormattedNumber";
import YouTubeVideoPlayer from "./YouTubeVideoPlayer";

const VideoCard = ({ video }) => {
  const [playVideo, setPlayVideo] = useState(false);
  const viewCount = useFormattedNumber(video.statistics.viewCount);
  const thumbnailUrl = video.snippet.thumbnails.medium.url;

  const handleMouseEnter = () => setPlayVideo(true);
  const handleMouseLeave = () => setPlayVideo(false);

  return (
    <div
      className="w-64 overflow-hidden shadow-md h-64 border relative"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="absolute top-0 left-0 z-10">
        {!playVideo && <img src={thumbnailUrl} alt="Thumbnail" />}
      </div>
      <YouTubeVideoPlayer playVideo={playVideo} id={video.id} />
      <div className="p-2">
        <div className="line-clamp-2 text-base font-medium">
          {video.snippet.title}
        </div>
        <div className="text-sm">
          <div>{video.snippet.channelTitle}</div>
          <div>{viewCount} Views</div>
        </div>
      </div>
    </div>
  );
};

export default VideoCard;

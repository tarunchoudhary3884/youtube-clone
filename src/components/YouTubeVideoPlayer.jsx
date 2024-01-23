import React, { useEffect, useRef } from "react";

const YouTubeVideoPlayer = ({ playVideo, id }) => {
  const ytPlayerRef = useRef(null);

  useEffect(() => {
    const ytPlayer = ytPlayerRef.current;

    const handleMouseOver = () => {
      if (ytPlayer && ytPlayer.contentWindow) {
        if (playVideo) {
          ytPlayer.contentWindow.postMessage(
            '{"event":"command","func":"playVideo","args":""}',
            "*"
          );
        } else {
          ytPlayer.contentWindow.postMessage(
            '{"event":"command","func":"seekTo","args":[0,true]}',
            "*"
          );
          ytPlayer.contentWindow.postMessage(
            '{"event":"command","func":"pauseVideo","args":""}',
            "*"
          );
        }
      }
    };

    handleMouseOver();

    return () => {
      if (ytPlayer) {
        ytPlayer.removeEventListener("mouseover", handleMouseOver);
      }
    };
  }, [playVideo]);

  return (
    <div className="w-full pointer-events-none">
      <iframe
        ref={ytPlayerRef}
        title="YouTube video player"
        className="w-full aspect-video"
        src={`https://www.youtube.com/embed/${id}?mute=1&enablejsapi=1&controls=0&disablekb=1&rel=0`}
        frameBorder="0"
        allowFullScreen={true}
      />
    </div>
  );
};

export default YouTubeVideoPlayer;

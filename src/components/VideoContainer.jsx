import React, { useEffect, useState } from "react";
import { youtube_video_list_url } from "../constants";
import VideoCard from "./VideoCard";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { openMenu } from "../redux/appSlice";
import Shimmer from "./Shimmer";

function VideoContainer() {
  const videoCategoryId = useSelector((store) => store.app.categoryId);
  const [videoList, setVideoList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(openMenu());
  }, []);

  useEffect(() => {
    getVideos();
  }, [videoCategoryId]);

  async function getVideos() {
    try {
      setLoading(true);
      const response = await fetch(
        youtube_video_list_url +
          `&videoCategoryId=${videoCategoryId}&key=${
            import.meta.env.VITE_API_KEY1
          }`
      );

      // Check for a 403 Forbidden status code
      if (response.status === 403) {
        throw new Error(
          "Access to the YouTube API has been restricted due to exceeding the daily quota limit. The YouTube API incorporates usage limits to safeguard against misuse and ensure equitable utilization by developers. We kindly request you to revisit the application tomorrow when the quota will be reset. Thank you for your understanding and cooperation."
        );
      }

      const data = await response.json();
      setVideoList(data.items);
      setLoading(false);
    } catch (error) {
      console.error(error);
      setError(error);
      setLoading(false);
    }
  }

  if (loading) {
    return (
      <div className="flex flex-wrap justify-center overflow-y-auto">
        <Shimmer />
        <Shimmer />
        <Shimmer />
        <Shimmer />
        <Shimmer />
        <Shimmer />
      </div>
    );
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div className="flex flex-wrap justify-center sm:justify-evenly items-start w-full h-full overflow-y-auto gap-2 p-2">
      {videoList?.map((video) => (
        <Link to={"/watch?v=" + video.id} key={video.id}>
          <VideoCard video={video} />
        </Link>
      ))}
    </div>
  );
}

export default VideoContainer;

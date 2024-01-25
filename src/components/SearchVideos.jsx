import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { closeMenu } from "../redux/appSlice";
import { search } from "../constants";
import { Link } from "react-router-dom";
import SearchCard from "./SearchCard";
import Shimmer from "./Shimmer";

function SearchVideos() {
  const [searchParams] = useSearchParams();
  const queryText = searchParams.get("q");
  const dispatch = useDispatch();
  const [searchResults, setSearchResults] = useState([]);
  const [apiKey, setApiKey] = useState(import.meta.env.VITE_API_KEY2);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    dispatch(closeMenu());
    if (queryText !== "") {
      getSearch();
    }
  }, [queryText, apiKey]);

  async function getSearch() {
    try {
      setLoading(true);
      if (!apiKey) {
        console.error("API key is undefined");
        return;
      }

      const response = await fetch(
        `${search}?part=snippet&maxResults=50&regionCode=IN&type=video&q=${queryText}&key=${apiKey}`
      );

      if (response.ok) {
        const data = await response.json();
        setSearchResults(data?.items || []);
      } else {
        console.error("Error fetching search results:", response.status);
        setApiKey(import.meta.env.VITE_API_KEY3);
      }
      setLoading(false);
    } catch (error) {
      console.error("Error fetching search results:", error);
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
        <Shimmer />
        <Shimmer />
        <Shimmer />
      </div>
    );
  }
  return (
    <div className="w-full h-full overflow-y-auto">
      <div className="flex justify-center items-center flex-wrap gap-2">
        {searchResults.map((video) => (
          <Link to={`/watch?v=${video.id.videoId}`} key={video.id.videoId}>
            <SearchCard video={video} />
          </Link>
        ))}
      </div>
    </div>
  );
}

export default SearchVideos;

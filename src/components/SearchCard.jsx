import React from "react";

function SearchCard({ video }) {
  const { thumbnails, title, description } = video.snippet;
  return (
    <div className="p-2 shadow-md w-72 h-80">
      <div className="flex flex-col">
        <div className="mx-auto min-w-64">
          <img
            src={thumbnails.medium.url}
            alt="Thumbnail"
            className="object-contain w-64"
          />
        </div>
        <div className="px-2">
          <div className="font-bold">{title}</div>
          <div className="line-clamp-2 text-sm">{description}</div>
        </div>
      </div>
    </div>
  );
}

export default SearchCard;

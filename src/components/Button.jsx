import React from "react";
import { useDispatch } from "react-redux";
import { setCategoryId } from "../redux/appSlice";

function Button({ category }) {
  const dispatch = useDispatch();

  return (
    <div
      className="p-2 flex-shrink-0 cursor-pointer hover:bg-zinc-100 text-sm line-clamp-1"
      onClick={() => {
        dispatch(setCategoryId(category.id));
      }}
    >
      {category.title}
    </div>
  );
}

export default Button;

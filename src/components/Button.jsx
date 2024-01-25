import React from "react";
import { useDispatch } from "react-redux";
import { closeMenu, setCategoryId } from "../redux/appSlice";
import { useSelector } from "react-redux";

function Button({ category }) {
  const dispatch = useDispatch();
  const isMobile = useSelector((store) => store.app.isMobile);

  return (
    <div
      className="p-2 flex-shrink-0 cursor-pointer hover:bg-zinc-100 text-sm line-clamp-1"
      onClick={() => {
        dispatch(setCategoryId(category.id));
        if (isMobile) {
          dispatch(closeMenu());
        }
      }}
    >
      {category.title}
    </div>
  );
}

export default Button;

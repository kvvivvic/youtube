import React from "react";
import { register } from "timeago.js";
import koLocale from "timeago.js/lib/lang/ko";
import { formatAgo } from "../util/data";
import { useNavigate } from "react-router-dom";

register("ko", koLocale);
const VideoCard = ({ video, type }) => {
  const { title, thumbnails, channelTitle, publishedAt } = video.snippet;
  const navigate = useNavigate();
  const isList = type === "list";
  return (
    <li
      className={isList ? "flex" : ""}
      onClick={() => {
        navigate(`/videos/watch/${video.id}`, {
          state: {
            video,
          },
        });
      }}
    >
      <img className={isList ? "w-60 mr-2" : "w-full"} src={thumbnails.medium.url} alt={title} />
      <div>
        <p className="font-semibold my-2 line-clamp-2">{title}</p>
        <p className="text-sm opacity-80">{channelTitle}</p>
        <p className="text-sm opacity-80">{formatAgo(publishedAt)}</p>
      </div>
    </li>
  );
};

export default VideoCard;

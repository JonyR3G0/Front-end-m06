import React from "react";
import { Star } from "lucide-react";
const stars = 1;

const tweetContainerStyle = "text-white";
const starButtonStyle = "flex";

export const Tweet = ({ tweet, onStar }) => {
  return (
    <div className={tweetContainerStyle}>

      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempore nam laudantium vitae eligendi quaerat incidunt velit et! Adipisci ut at optio velit libero, molestiae debitis reprehenderit saepe. Ipsam, recusandae fugit.</p>

      <button className={starButtonStyle}>
        {stars} <Star />
      </button>
      
    </div>
  );
};

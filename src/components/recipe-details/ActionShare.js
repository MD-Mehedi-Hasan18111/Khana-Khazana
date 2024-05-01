"use client";

import React, { useEffect, useRef, useState } from "react";
import {
  FacebookShareButton,
  TwitterShareButton,
  TwitterIcon,
  FacebookIcon,
  LinkedinShareButton,
  LinkedinIcon,
} from "next-share";

const ActionShare = () => {
  const [isShare, setIsShare] = useState(false);

  const shareRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (shareRef.current && !shareRef.current.contains(event.target)) {
        setIsShare(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [shareRef]);

  return (
    <div className="relative">
      <div
        ref={shareRef}
        className={`transition-opacity ${
          isShare ? "opacity-100" : "opacity-0"
        } bg-[#ecf0f1] w-[80px] h-[165px] px-[6px] py-[10px] rounded-[12px] absolute bottom-7 left-0 flex flex-col space-y-3 items-center`}
      >
        <FacebookShareButton url={window.location.href}>
          <FacebookIcon size={40} className="rounded-[10px]" />
        </FacebookShareButton>
        <TwitterShareButton url={window.location.href}>
          <TwitterIcon size={40} className="rounded-[10px]" />
        </TwitterShareButton>
        <LinkedinShareButton url={window.location.href}>
          <LinkedinIcon size={40} className="rounded-[10px]" />
        </LinkedinShareButton>
      </div>
      <div
        onClick={() => setIsShare(!isShare)}
        className="flex gap-2 text-gray-600 cursor-pointer hover:text-[#0E79F6]"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M6 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
          <path d="M18 6m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
          <path d="M18 18m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
          <path d="M8.7 10.7l6.6 -3.4" />
          <path d="M8.7 13.3l6.6 3.4" />
        </svg>
        <span>Share</span>
      </div>
    </div>
  );
};

export default ActionShare;

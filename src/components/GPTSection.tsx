import React from "react";
import { PaperClipIcon } from "@heroicons/react/24/solid";

const GPTSection = () => {
  return (
    <div className="flex flex-col items-center space-y-3">
      <span className="text-xl text-[#ADB7BE] animate-pulse">
        Ask my GPT assistant
      </span>
      <div className="flex items-center w-[96vh] justify-between bg-gray-800 p-4 rounded-full w-full max-w-md mx-auto">
        <input
          type="text"
          placeholder="Message ChatGPT..."
          className="flex-1 bg-transparent text-white placeholder-gray-400 outline-none"
          aria-label="Type your message"
        />

        {/* Button to send or submit the message */}
        <button className="text-gray-400 hover:text-white">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 transform" // Rotated arrow icon
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M14 5l7 7m0 0l-7 7m7-7H3"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default GPTSection;

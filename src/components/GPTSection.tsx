import React, { useState } from "react";
import axios from "axios";

const GPTSection = () => {
  const [message, setMessage] = useState(""); // State for storing user message
  const [responseContent, setResponseContent] = useState(""); // State for storing response content
  const [isLoading, setIsLoading] = useState(false); // State to track loading status

  const handleSubmit = async () => {
    if (!message.trim()) return; // Prevents sending empty messages

    setIsLoading(true); // Indicate the start of a request
    try {
      const response = await axios.post("http://localhost:3000/chat", {
        prompt: message,
      });

      const content = response.data.choices[0].message.content;
      setResponseContent(content); // Update state with the response content
      setMessage(""); // Reset message input after sending
    } catch (error) {
      console.error("There was an error!", error);
      // Optionally handle errors (e.g., update UI to show error message)
    } finally {
      setIsLoading(false); // Reset loading status regardless of request outcome
    }
  };

  return (
    <div className="flex flex-col items-center space-y-3 ">
      <span className="text-xl text-[#ADB7BE] animate-pulse">
        Ask my GPT assistant
      </span>
      <div className="flex items-center justify-between bg-gray-800 p-4 rounded-full w-full max-w-md mx-auto">
        <input
          type="text"
          placeholder="Message ChatGPT..."
          className="flex-1 bg-transparent text-white placeholder-gray-400 outline-none pr-5 w-[96vh]"
          aria-label="Type your message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <button
          className="text-gray-400 hover:text-white"
          onClick={handleSubmit}
          disabled={isLoading} // Disable the button when loading
        >
          {isLoading ? (
            <div className="animate-spin h-5 w-5 border-4 border-blue-500 rounded-full border-t-transparent"></div>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 transform"
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
          )}
        </button>
      </div>
      {/* Display response content or loading indicator */}
      {isLoading ? (
        <div className="mt-4"></div>
      ) : responseContent ? (
        <div className="mt-4 w-full max-w-md mx-auto bg-gray-100 p-4 rounded-lg text-gray-800">
          {responseContent}
        </div>
      ) : null}
    </div>
  );
};

export default GPTSection;

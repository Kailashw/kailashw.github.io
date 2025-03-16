import { useTheme } from "@/context/ThemeContext";
import React from "react";

function Quotes() {
  const { isDarkMode } = useTheme();
  return (
    <div
      className={`mt-16 max-w-2xl mx-auto p-6 rounded-lg ${
        isDarkMode ? "bg-gray-800" : "bg-gray-100"
      }`}
    >
      <blockquote className="text-center">
        <p
          className={`text-lg italic mb-4 ${
            isDarkMode ? "text-gray-300" : "text-gray-700"
          }`}
        >
          "Any fool can write code that a computer can understand. Good
          programmers write code that humans can understand."
        </p>
        <footer className={`${isDarkMode ? "text-gray-400" : "text-gray-600"}`}>
          - Martin Fowler
        </footer>
      </blockquote>
    </div>
  );
}

export default Quotes;

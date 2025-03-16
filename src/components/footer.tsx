import { useTheme } from "@/context/ThemeContext";
import React from "react";

function Footer() {
  const { isDarkMode } = useTheme();
  return (
    <footer className="fixed bottom-0 left-0 w-full backdrop-blur-sm z-50">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-center md:space-x-16 space-x-12">
          <div className="group relative">
            <a
              href="mailto:kailashwall@gmail.com"
              className={`${
                isDarkMode
                  ? "text-white hover:text-gray-200"
                  : "text-gray-600 hover:text-gray-900"
              } transition-colors p-2 block`}
              aria-label="Email"
            >
              <svg
                className="w-6 h-6"
                fill={isDarkMode ? "white" : "currentColor"}
                viewBox="0 0 20 20"
              >
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
              </svg>
              <span className="absolute -top-8 left-1/2 -translate-x-1/2 bg-gray-900 text-white px-2 py-1 rounded text-sm opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                Email Me
              </span>
            </a>
          </div>

          <div className="group relative">
            <a
              href="https://drive.google.com/file/d/1efFNq_JJGvgw1x0Iw0nIChdXoTBwdaye/view?usp=sharing"
              className={`${
                isDarkMode
                  ? "text-white hover:text-gray-200"
                  : "text-gray-600 hover:text-gray-900"
              } transition-colors p-2 block`}
              aria-label="Download Resume"
              download
            >
              <svg
                className="w-6 h-6"
                fill={isDarkMode ? "white" : "currentColor"}
                viewBox="0 0 20 20"
              >
                <path d="M8 2a1 1 0 011 1v10.586l3.293-3.293a1 1 0 111.414 1.414l-5 5a1 1 0 01-1.414 0l-5-5a1 1 0 111.414-1.414L6 13.586V3a1 1 0 012-1z" />
              </svg>
              <span className="absolute -top-8 left-1/2 -translate-x-1/2 bg-gray-900 text-white px-2 py-1 rounded text-sm opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                Download Resume
              </span>
            </a>
          </div>

          <div className="group relative">
            <a
              href="https://github.com/kailashw"
              target="_blank"
              rel="noopener noreferrer"
              className={`${
                isDarkMode
                  ? "text-white hover:text-gray-200"
                  : "text-gray-600 hover:text-gray-900"
              } transition-colors p-2 block`}
              aria-label="GitHub"
            >
              <svg
                className="w-6 h-6"
                fill={isDarkMode ? "white" : "currentColor"}
                viewBox="0 0 24 24"
              >
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
              </svg>
              <span className="absolute -top-8 left-1/2 -translate-x-1/2 bg-gray-900 text-white px-2 py-1 rounded text-sm opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                GitHub Profile
              </span>
            </a>
          </div>

          <div className="group relative">
            <a
              href="https://linkedin.com/in/kailashw"
              target="_blank"
              rel="noopener noreferrer"
              className={`${
                isDarkMode
                  ? "text-white hover:text-gray-200"
                  : "text-gray-600 hover:text-gray-900"
              } transition-colors p-2 block`}
              aria-label="LinkedIn"
            >
              <svg
                className="w-6 h-6"
                fill={isDarkMode ? "white" : "currentColor"}
                viewBox="0 0 24 24"
              >
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
              <span className="absolute -top-8 left-1/2 -translate-x-1/2 bg-gray-900 text-white px-2 py-1 rounded text-sm opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                LinkedIn Profile
              </span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

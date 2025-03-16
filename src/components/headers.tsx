"use client";
import { useTheme } from "@/context/ThemeContext";
import Link from "next/link";
import React, { useState } from "react";

export default function Header() {
  const { isDarkMode, toggleTheme } = useTheme();
  const [menuOpen, setMenuOpen] = useState(false);
  const navItems = [
    { label: "Home", route: "/", icon: "🏠" },
    { label: "Blogs", route: "/blogs", icon: "📝" },
    { label: "Projects", route: "/projects", icon: "📁" },
    { label: "Contact", route: "tel:+971528450177", icon: "📱" },
  ];

  const handleMenuItemClick = () => {
    setMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 w-full backdrop-blur-sm z-50 transition-all duration-300">
      <div className="container mx-auto px-4 py-3">
        <div
          className="transform-gpu transition-transform duration-300 flex items-center justify-between"
          id="header-text"
        >
          <h1
            className={`text-xl font-semibold ${
              isDarkMode ? "text-white" : "text-gray-900"
            }`}
          >
            <span className="transition-opacity duration-300" id="full-name">
              <Link href={'/'}> K W </Link>
            </span>
          </h1>
          <div className="flex items-center space-x-4">
            <button
              onClick={toggleTheme}
              className={`${
                isDarkMode
                  ? "text-white hover:text-gray-200"
                  : "text-gray-900 hover:text-gray-600"
              } transition-colors group relative`}
              aria-label="Toggle Theme"
            >
              <div className="flex items-center space-x-2">
                {isDarkMode ? (
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" />
                  </svg>
                ) : (
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                  </svg>
                )}
                <span className="absolute top-full left-1/2 -translate-x-1/2 bg-gray-900 text-white px-2 py-1 rounded text-sm opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                  Toggle Theme
                </span>
              </div>
            </button>
            <div className="relative">
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className={`${
                  isDarkMode
                    ? "text-white hover:text-gray-200"
                    : "text-gray-900 hover:text-gray-600"
                } transition-colors group relative`}
              >
                {isDarkMode ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    x="0px"
                    y="0px"
                    width="35"
                    height="30"
                    viewBox="0,0,256,256"
                  >
                    <g
                      fill="#ffffff"
                      stroke="none"
                    >
                      <g transform="scale(5.12,5.12)">
                        <path d="M0,7.5v5h50v-5zM0,22.5v5h50v-5zM0,37.5v5h50v-5z"></path>
                      </g>
                    </g>
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    x="0px"
                    y="0px"
                    width="35"
                    height="30"
                    viewBox="0 0 24 24"
                  >
                    <path d="M 2 5 L 2 7 L 22 7 L 22 5 L 2 5 z M 2 11 L 2 13 L 22 13 L 22 11 L 2 11 z M 2 17 L 2 19 L 22 19 L 22 17 L 2 17 z"></path>
                  </svg>
                )}
              </button>
              {menuOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg z-50">
                  <ul
                    className={`${
                      isDarkMode
                        ? "bg-gray-800 text-white"
                        : "bg-white text-gray-900"
                    }`}
                  >
                    {navItems.map((item) => (
                      <li key={item.label}>
                        <a
                          href={item.route}
                          onClick={handleMenuItemClick}
                          className="flex items-center block px-4 py-2 hover:bg-gray-200"
                        >
                          <span className="mr-2">{item.icon}</span>
                          {item.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

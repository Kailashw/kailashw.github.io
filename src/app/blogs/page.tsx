"use client";
import Footer from "@/components/footer";
import Header from "@/components/headers";
import { useTheme } from "@/context/ThemeContext";
import Link from "next/link";
import React from "react";

function Blogs() {
  const { isDarkMode } = useTheme();

  return (
    <div
      className={`flex flex-col min-h-screen ${
        isDarkMode ? "bg-gray-900" : "bg-gray-100"
      }`}
    >
      <Header />
      <main
        className={`flex-grow flex flex-col items-center justify-center p-8 space-y-6 ${
          isDarkMode ? "bg-gray-900" : "bg-gray-200"
        }`}
      >
        <h1
          className={`text-4xl font-bold mb-2 ${
            isDarkMode ? "text-white" : "text-gray-900"
          }`}
        >
          Coming Soon
        </h1>
        <p
          className={`text-xl mb-6 ${
            isDarkMode ? "text-gray-300" : "text-gray-600"
          }`}
        >
          Our Blogs page is under construction. Stay tuned for updates!
        </p>
        <button
          className={`px-6 py-2 ${
            isDarkMode ? "bg-gray-400" : "bg-gray-700"
          } rounded-lg hover:bg-gray-800 transition duration-300`}
        >
          <Link href="/">Go Back to Home</Link>
        </button>
      </main>
      <Footer />
    </div>
  );
}

export default Blogs;

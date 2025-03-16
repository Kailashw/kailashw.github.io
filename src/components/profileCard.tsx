import { useTheme } from "@/context/ThemeContext";
import Image from "next/image";
import React from "react";

function ProfileCard() {
    const { isDarkMode } = useTheme();
  return (
    <div className="flex flex-col items-center justify-center space-y-6 mt-8">
      <div className="relative w-48 h-48 rounded-full overflow-hidden bg-gray-200 flex items-center justify-center">
        <Image
          src="/profile-pic.png"
          width={192}
          height={192}
          alt="Kailash Walldoddi"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="text-center">
        <h1
          className={`text-4xl font-bold mb-2 ${
            isDarkMode ? "text-white" : "text-gray-900"
          }`}
        >
          Kailash Walldoddi
        </h1>
        <h2
          className={`text-xl mb-6 ${
            isDarkMode ? "text-gray-300" : "text-gray-600"
          }`}
        >
          Senior Software Engineer
        </h2>
      </div>
      <p
        className={`max-w-2xl text-center leading-relaxed ${
          isDarkMode ? "text-gray-300" : "text-gray-600"
        }`}
      >
        I am a passionate software engineer with over 8 years of experience in
        full-stack development. I specialize in building scalable web
        applications using Python, React, Node.js, and cloud technologies.
        Throughout my career, I've worked on various projects including
        e-commerce platforms, enterprise applications, and real-time analytics
        dashboards. I have a strong focus on writing clean, maintainable code
        and implementing best practices in software development.
      </p>
    </div>
  );
}

export default ProfileCard;

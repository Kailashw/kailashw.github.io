"use client";
import Footer from "@/components/footer";
import Header from "@/components/headers";
import ProfileCard from "@/components/profileCard";
import Quotes from "@/components/quote";
import TechStack from "@/components/technologies";
import { useTheme } from "@/context/ThemeContext";
import React from "react";

export default function Home() {
  const { isDarkMode } = useTheme();

  return (
    <div
      className={`min-h-screen ${
        isDarkMode ? "bg-gray-900 text-white" : "bg-white text-gray-900"
      }`}
    >
      <Header />
      <main className="container mx-auto px-4 py-20">
        <ProfileCard />
        <TechStack />
        <Quotes />
      </main>
      <Footer />
    </div>
  );
}

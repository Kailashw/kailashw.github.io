"use client";
import Footer from "@/components/footer";
import Header from "@/components/headers";
import ProfileCard from "@/components/profileCard";
import Quotes from "@/components/quote";
import TechStack from "@/components/technologies";
import { useTheme } from "@/context/ThemeContext";
import Head from "next/head";
import React from "react";

export default function Home() {
  const { isDarkMode } = useTheme();

  return (
    <div
      className={`min-h-screen ${
        isDarkMode ? "bg-gray-900 text-white" : "bg-white text-gray-900"
      }`}
    >
      <Head>
        <title>Kailas Walldoddi | Developer</title>
        <meta
          name="Kailas Walldoddi"
          content="Python | LLM | React JS | Node JS| Nest JS | Next JS | Cloud | AWS | Azure | GCP | Docker | Fast API | Flask | Express JS | Mongo DB | Postgres"
          key="Python', 'LLM', 'React JS', 'Node JS| Nest JS', 'Next JS', 'Cloud', 'AWS', 'Azure', 'GCP', 'Docker', 'Fast API', 'Flask', 'Express JS', 'Mongo DB', 'Postgres"
        />
      </Head>
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

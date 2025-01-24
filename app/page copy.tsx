import React from "react";
import Hero from "@/components/Hero/Hero";
import Nav from "@/components/Navigation";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative flex flex-col items-center w-full min-h-screen lg:max-h-screen">
      <div className="lg:grid lg:grid-cols-2 pt-16 lg:pt-0 w-full min-h-full max-w-screen-xl">
        <header className="lg:overflow-hidden lg:py-20 lg:pr-20 z-20">
          <Hero />
        </header>
        <div className="flex flex-col gap-20 max-h-full lg:overflow-y-scroll lg:no-scrollbar scroll-smooth">
          <Nav />
          <Footer />
        </div>
      </div>
    </main>
  );
}

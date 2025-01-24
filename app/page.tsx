import React from "react";
import Heading from "@/components/Hero/Heading";
import All from "@/components/All";

export default function Home() {
  return (
    <main>
      <div className="hidden lg:block fixed w-screen h-screen bg-gradient-to-br from-secondary-700/75 to-primary -z-50"></div>
      <div className="pt-16 lg:pt-0">
        <Heading />
        <All />
      </div>
    </main>
  );
}

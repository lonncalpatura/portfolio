import About from "@/components/About";
import Education from "@/components/Education";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";

export default function Home() {
  return (
    <main className="relative flex flex-col items-center w-full min-h-screen lg:max-h-screen px-4 sm:px-8 md:px-16">
      <div className="lg:grid lg:grid-cols-2 lg:gap-8 pt-16 lg:pt-0 w-full min-h-full max-w-screen-xl">
        <div className="lg:overflow-hidden lg:py-20">
          <Hero />
        </div>
        <div className="flex flex-col gap-20 mt-32 lg:mt-0 max-h-full lg:overflow-y-scroll lg:no-scrollbar lg:pt-20">
          <About />
          <Projects />
          <Experience />
          <Education />
          <Footer />
        </div>
      </div>
    </main>
  );
}

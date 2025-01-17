import About from "@/components/About";
import Education from "@/components/Education";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <main className="relative flex flex-col items-center w-full min-h-screen px-4 pt-16 md:px-16  overflow-hidden">
      <div className="min-h-screen max-w-screen-xl w-full">
        <div>
          <Hero />
        </div>
        <div className="flex flex-col gap-20 mt-32">
          <About />
          <Education />
          <Experience />
        </div>
      </div>
      <footer className="sticky bottom-0">
        <Footer />
      </footer>
    </main>
  );
}

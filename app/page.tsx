import About from "@/components/About";
import Education from "@/components/Education";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <main className="relative flex flex-col items-center w-full min-h-screen px-4 pt-16 md:px-8 bg-background text-primary overflow-hidden">
      <div className="max-w-screen-xl w-full">
        <div>
          <Hero />
        </div>
        <div className="flex flex-col gap-20 mt-40">
          <About />
          <Education />
        </div>
      </div>
      <footer>
        <Footer />
      </footer>
    </main>
  );
}

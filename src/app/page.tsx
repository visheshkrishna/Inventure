import Nav from "./components/nav";
import Hero from "./components/hero";
import Features from "./components/Features";
import ScrollingCompanies from "./components/ScrollingCompanies";
import Testimonials from "./components/Testimonials";
import AIFeatures from "./components/AIFeatures";
import Footer from "./components/Footer";

export default function Page() {
  return (
    <>
      <Nav />
      <main className="mx-auto max-w-6xl px-1 py-8">
        <Hero />
        <Features />
        <div className="mt-20">
          <ScrollingCompanies />
        </div>
        <Testimonials />
        <AIFeatures />
      </main>
      <Footer />
    </>
  );
}

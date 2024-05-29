import HeroSection from "./components/hero-section";
import Navbar from "./components/navbar";
import AboutSection from "./components/about-section";
import ProjectsSection from "./components/projects-section";
import ContactsSection from "./components/contacts-section";
import Footer from "./components/footer";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212]">
      <Navbar />
      <div className="container mt-24 mx-auto px-12 py-4">
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <ContactsSection />
      </div>
      <Footer />
    </main>
  );
}

import { useState } from "react";
import Navigation from "@/components/Navigation";
import ContactForm from "@/components/ContactForm";
import HeroSection from "@/components/sections/HeroSection";
import HomeSection from "@/components/sections/HomeSection";
import TrainingSection from "@/components/sections/TrainingSection";
import AboutSection from "@/components/sections/AboutSection";
import ContactSection from "@/components/sections/ContactSection";

const Index = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [isContactFormOpen, setIsContactFormOpen] = useState(false);

  const handleSectionChange = (section: string) => {
    setActiveSection(section);
  };

  const openContactForm = () => {
    setIsContactFormOpen(true);
  };

  const closeContactForm = () => {
    setIsContactFormOpen(false);
  };

  const renderContent = () => {
    switch (activeSection) {
      case "home":
        return (
          <>
            <HeroSection onContactFormOpen={openContactForm} />
            <HomeSection />
          </>
        );
      case "training":
        return <TrainingSection onContactFormOpen={openContactForm} />;
      case "about":
        return <AboutSection />;
      case "contact":
        return <ContactSection onContactFormOpen={openContactForm} />;
      default:
        return (
          <>
            <HeroSection onContactFormOpen={openContactForm} />
            <HomeSection />
          </>
        );
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation 
        activeSection={activeSection} 
        onSectionChange={handleSectionChange} 
      />
      
      <main className="pt-16">
        {renderContent()}
      </main>

      <ContactForm 
        isOpen={isContactFormOpen} 
        onClose={closeContactForm} 
      />
      
      {/* Footer */}
      <footer className="py-8 bg-muted/30 border-t border-border">
        <div className="container mx-auto px-4 text-center">
          <p className="text-muted-foreground">
            © 2024 Michał Dziamski. Wszystkie prawa zastrzeżone.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;

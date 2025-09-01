import { Button } from "@/components/ui/button";
import { Mail, Phone } from "lucide-react";

interface HeroSectionProps {
  onContactFormOpen: () => void;
}

const HeroSection = ({ onContactFormOpen }: HeroSectionProps) => {
  return (
    <section className="min-h-screen flex items-center justify-center hero-gradient text-primary-foreground relative overflow-hidden">
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h1 className="text-4xl md:text-6xl font-serif font-bold leading-tight">
            Odkryj potencjał swojego zespołu
          </h1>
          
          <p className="text-xl md:text-2xl opacity-90 leading-relaxed max-w-3xl mx-auto">
            Jestem Michał Dziamski, doświadczony trener biznesowy. 
            Pomagam ludziom i organizacjom rozwijać umiejętności, 
            które przekładają się na prawdziwe rezultaty.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
            <Button 
              size="lg" 
              variant="secondary"
              onClick={onContactFormOpen}
              className="text-lg px-8 py-6 h-auto"
            >
              <Mail className="w-5 h-5 mr-2" />
              Skontaktuj się
            </Button>
            
            <Button 
              size="lg" 
              variant="outline"
              onClick={() => window.location.href = 'tel:+48602269495'}
              className="text-lg px-8 py-6 h-auto border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
            >
              <Phone className="w-5 h-5 mr-2" />
              +48 602 26 94 95
            </Button>
          </div>
        </div>
      </div>
      
      {/* Subtle decoration */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary-foreground/20 to-transparent"></div>
    </section>
  );
};

export default HeroSection;
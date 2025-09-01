import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, Phone, MapPin, Clock } from "lucide-react";

interface ContactSectionProps {
  onContactFormOpen: () => void;
}

const ContactSection = ({ onContactFormOpen }: ContactSectionProps) => {
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "m_dz@o2.pl",
      action: () => window.location.href = 'mailto:m_dz@o2.pl'
    },
    {
      icon: Phone,
      label: "Telefon",
      value: "+48 602 26 94 95",
      action: () => window.location.href = 'tel:+48602269495'
    },
    {
      icon: MapPin,
      label: "Adres",
      value: "Serdeczna 9, 86-031 Jarużyn",
      action: null
    },
    {
      icon: Clock,
      label: "Dostępność",
      value: "Pon-Pt: 9:00-18:00",
      action: null
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center space-y-6 mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary">
              Kontakt
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              Chętnie odpowiem na Twoje pytania i przedyskutuję możliwości współpracy. 
              Skontaktuj się ze mną w dogodny dla Ciebie sposób.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {contactInfo.map((info, index) => {
              const IconComponent = info.icon;
              return (
                <Card 
                  key={index} 
                  className={`group ${info.action ? 'cursor-pointer hover:shadow-lg' : ''} transition-all duration-300`}
                  onClick={info.action || undefined}
                >
                  <CardContent className="p-6 flex items-center space-x-4">
                    <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                      <IconComponent className="w-6 h-6 text-accent" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">{info.label}</p>
                      <p className="font-medium text-primary">{info.value}</p>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="text-xl font-serif">Szybki kontakt</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  Masz pytania o szkolenia lub chcesz omówić indywidualną ofertę? 
                  Wypełnij formularz kontaktowy, a odezwę się w ciągu 24 godzin.
                </p>
                <Button 
                  onClick={onContactFormOpen}
                  size="lg" 
                  className="w-full"
                >
                  <Mail className="w-4 h-4 mr-2" />
                  Otwórz formularz kontaktowy
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-xl font-serif">Rozmowa telefoniczna</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  Wolisz bezpośrednią rozmowę? Zadzwoń, a wspólnie ustalimy 
                  szczegóły współpracy i odpowiem na wszystkie pytania.
                </p>
                <Button 
                  onClick={() => window.location.href = 'tel:+48602269495'}
                  variant="outline"
                  size="lg" 
                  className="w-full"
                >
                  <Phone className="w-4 h-4 mr-2" />
                  Zadzwoń teraz
                </Button>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-12 p-8 bg-muted/30 rounded-lg">
            <h3 className="text-xl font-serif font-semibold text-primary mb-4">
              Gotowy na zmianę?
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Każda podróż rozwoju zaczyna się od pierwszego kroku. 
              Skontaktuj się ze mną już dziś, a wspólnie zaplanujemy ścieżkę 
              do osiągnięcia Twoich celów.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" onClick={onContactFormOpen}>
                <Mail className="w-4 h-4 mr-2" />
                Napisz do mnie
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                onClick={() => window.location.href = 'tel:+48602269495'}
              >
                <Phone className="w-4 h-4 mr-2" />
                +48 602 26 94 95
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;